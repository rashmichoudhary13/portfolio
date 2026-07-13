import * as React from "react"
import { motion } from "motion/react"
import { Message, MessageContent } from "@/components/ui/AnimatedChat/message"
import { Bubble, BubbleContent } from "@/components/ui/AnimatedChat/bubble"
import { MessageScrollerItem } from "@/components/ui/AnimatedChat/message-scroller"
import { getMessageText } from "@/lib/ai"

interface MessageAnimatedProps {
    message: {
        id: string;
        role: "user" | "assistant" | "system" | string;
        content?: string;
        parts?: any[];
    };
    scrollAnchor?: boolean;
}

export function MessageAnimated({ message, scrollAnchor }: MessageAnimatedProps) {
    const isUser = message.role === "user"
    const text = getMessageText(message)

    return (
        <MessageScrollerItem
            messageId={message.id}
            scrollAnchor={scrollAnchor}
            className="min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]"
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Message align={isUser ? "end" : "start"}>
                    <MessageContent>
                        <Bubble variant={isUser ? "secondary" : "ghost"}>
                            <BubbleContent className={isUser ? "rounded-3xl" : "whitespace-pre-wrap rounded-none"}>
                                {text}
                            </BubbleContent>
                        </Bubble>
                    </MessageContent>
                </Message>
            </motion.div>
        </MessageScrollerItem>
    )
}
