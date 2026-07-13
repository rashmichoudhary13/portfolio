import { ChatTransport, UIMessageChunk } from "ai";

export interface Message {
  id: string;
  role: "user" | "assistant" | "system" | string;
  content: string;
  parts?: any[];
}

export interface MockMessage {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    sleepMs?: number;
}

class MockChatBuilder {
    private messages: MockMessage[] = [];

    user(content: string) {
        this.messages.push({
            id: `msg-${this.messages.length + 1}`,
            role: "user",
            content,
            parts: [{ type: "text", text: content }]
        } as any);
        return this;
    }

    assistant(content: string) {
        this.messages.push({
            id: `msg-${this.messages.length + 1}`,
            role: "assistant",
            content,
            parts: [{ type: "text", text: content }]
        } as any);
        return this;
    }

    sleep(ms: number) {
        if (this.messages.length > 0) {
            this.messages[this.messages.length - 1].sleepMs = ms;
        }
        return this;
    }

    get(options: { count: number }) {
        return this.messages.slice(0, options.count).map(m => ({
            id: m.id,
            role: m.role,
            content: m.content,
            parts: (m as any).parts || [{ type: "text", text: m.content }]
        }));
    }

    getMessageAt(index: number): MockMessage | undefined {
        return this.messages[index];
    }

    getMessagesLength(): number {
        return this.messages.length;
    }

    next(options: { after: Message[] }) {
        const count = options.after.length;
        if (count % 2 === 0 && count < this.messages.length) {
            return this.messages[count];
        }
        return null;
    }

    transport(options: { chunkDelayMs: number }) {
        return new MockChatTransport(this, options.chunkDelayMs);
    }
}

class MockChatTransport implements ChatTransport<any> {
    private chat: MockChatBuilder;
    private chunkDelayMs: number;

    constructor(chat: MockChatBuilder, chunkDelayMs: number) {
        this.chat = chat;
        this.chunkDelayMs = chunkDelayMs;
    }

    async sendMessages(options: {
        trigger: 'submit-message' | 'regenerate-message';
        chatId: string;
        messageId: string | undefined;
        messages: any[];
    }) {
        const nextMsgIndex = options.messages.length;
        const nextMsg = this.chat.getMessageAt(nextMsgIndex);
        const assistantMsgId = `msg-${nextMsgIndex + 1}`;
        const delay = this.chunkDelayMs;

        return new ReadableStream<UIMessageChunk>({
            async start(controller) {
                if (nextMsg && nextMsg.role === "assistant") {
                    controller.enqueue({
                        type: "text-start",
                        id: assistantMsgId
                    });

                    const text = nextMsg.content;
                    const words = text.split(" ");
                    for (let i = 0; i < words.length; i++) {
                        const delta = words[i] + (i === words.length - 1 ? "" : " ");
                        controller.enqueue({
                            type: "text-delta",
                            delta,
                            id: assistantMsgId
                        });
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }

                    controller.enqueue({
                        type: "text-end",
                        id: assistantMsgId
                    });
                }
                controller.close();
            }
        });
    }

    async reconnectToStream() {
        return null;
    }
}

export function createChat() {
    return new MockChatBuilder();
}

export function getMessageText(message: any): string {
    if (message == null) return "";
    if (message.parts && Array.isArray(message.parts)) {
        return message.parts
            .filter((part: any) => part.type === "text")
            .map((part: any) => part.text)
            .join("");
    }
    return message.content || "";
}
