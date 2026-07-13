"use client"

import { useChat } from "@ai-sdk/react"
import {
    ArrowUpIcon,
    GlobeIcon,
    ImageIcon,
    MessageCircleDashedIcon,
    PaperclipIcon,
    PlusIcon,
    RotateCwIcon,
    TelescopeIcon,
} from "lucide-react"

import { createChat, getMessageText } from "@/lib/ai"
import { MessageAnimated } from "@/components/ui/message-animated"
import { Button } from "@/components/ui/AnimatedChat/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/AnimatedChat/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/AnimatedChat/dropdown-menu"
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/AnimatedChat/empty"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
} from "@/components/ui/AnimatedChat/input-group"
import {
    MessageScroller,
    MessageScrollerButton,
    MessageScrollerContent,
    MessageScrollerProvider,
    MessageScrollerViewport,
} from "@/components/ui/AnimatedChat/message-scroller"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/AnimatedChat/tooltip"

const chat = createChat()
    .user(
        "Hi! Can you tell me about yourself?"
    )
    .sleep(1000)
    .assistant(
        "I'm a Full-Stack Developer who enjoys building modern web applications. My expertise spans across both frontend and backend technologies, with a strong focus on creating seamless user experiences. I am passionate about clean code and efficient problem-solving."
    )
    .user(
        "What's your educational background?"
    )
    .sleep(1000)
    .assistant(
        "I hold a Bachelor's degree in Computer Engineering from MGM College of Engineering and Technology, affiliated with Mumbai University, where I developed a strong foundation in computer science principles, programming languages, and software development methodologies."
    )
    .user(
        "What do you enjoy the most?"
    )
    .sleep(1000)
    .assistant(
        "Turning ideas into products that people actually love to use. "
    )
    .user(
        "Currently?"
    )
    .sleep(1000)
    .assistant(
        "I'm currently exploring opportunities to leverage my skills in web development and technology to solve real-world problems and contribute to meaningful projects."
    )
const initialMessages = chat.get({ count: 0 })
const transport = chat.transport({ chunkDelayMs: 20 })

export function MessageScrollerDemo() {
    const { messages, sendMessage, status, setMessages } = useChat({
        messages: initialMessages,
        transport,
    })
    const nextMessage = chat.next({ after: messages })
    const isBusy = status === "submitted" || status === "streaming"

    return (
        <TooltipProvider>
            <MessageScrollerProvider>
                <div className="relative flex flex-col gap-4">
                    <Card className="mx-auto h-140 w-full max-w-sm gap-0 bg-zinc-950/60 border-zinc-800 text-zinc-50">
                        <CardHeader className="gap-1 border-b border-zinc-800">
                            <CardTitle>Recruiter</CardTitle>
                            <CardDescription>Interactive Introduction</CardDescription>
                            <CardAction>
                                <Tooltip>
                                    <TooltipTrigger render={
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            aria-label="Reset conversation"
                                            onClick={() => setMessages(initialMessages)}
                                            disabled={isBusy}
                                            className="border-zinc-800 text-zinc-300 hover:text-zinc-50 hover:bg-zinc-900"
                                        >
                                            <RotateCwIcon />
                                        </Button>
                                    } />
                                    <TooltipContent>
                                        <p>Reset</p>
                                    </TooltipContent>
                                </Tooltip>
                            </CardAction>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-hidden p-0">
                            {messages.length === 0 ? (
                                <Empty className="h-full">
                                    <EmptyHeader>
                                        <EmptyMedia variant="icon">
                                            <MessageCircleDashedIcon />
                                        </EmptyMedia>
                                        <EmptyTitle>Welcome!</EmptyTitle>
                                        <EmptyDescription>
                                            Explore my education, experience, and projects through a conversation.
                                        </EmptyDescription>
                                    </EmptyHeader>
                                </Empty>
                            ) : (
                                <MessageScroller>
                                    <MessageScrollerViewport>
                                        <MessageScrollerContent
                                            aria-busy={isBusy}
                                            className="p-(--card-spacing)"
                                        >
                                            {messages.map((message) => (
                                                <MessageAnimated
                                                    key={message.id}
                                                    message={message}
                                                    scrollAnchor={message.role === "user"}
                                                />
                                            ))}
                                        </MessageScrollerContent>
                                    </MessageScrollerViewport>
                                    <MessageScrollerButton />
                                </MessageScroller>
                            )}
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    if (!nextMessage || isBusy) {
                                        return
                                    }
                                    void sendMessage(nextMessage as any)
                                }}
                                className="w-full"
                            >
                                <InputGroup className="border-zinc-800 bg-zinc-900/40">
                                    <div className="h-14 w-full px-3 py-2.5">
                                        <span
                                            className="line-clamp-2 opacity-60 data-[status=ready]:opacity-100"
                                            data-status={status}
                                        >
                                            {nextMessage ? (
                                                getMessageText(nextMessage)
                                            ) : (
                                                <span className="text-muted-foreground">
                                                    No messages queued. Reset the conversation.
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                    <InputGroupAddon align="block-end" className="pt-1">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger render={
                                                <InputGroupButton
                                                    aria-label="Add files"
                                                    type="button"
                                                    size="icon-sm"
                                                    variant="outline"
                                                    className="border-zinc-800 text-zinc-300 hover:text-zinc-50 hover:bg-zinc-900"
                                                >
                                                    <PlusIcon />
                                                </InputGroupButton>
                                            } />
                                            <DropdownMenuContent
                                                align="start"
                                                side="top"
                                                className="w-44"
                                            >
                                                <DropdownMenuItem>
                                                    <PaperclipIcon />
                                                    Add Photos & Files
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <ImageIcon />
                                                    Create Image
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <TelescopeIcon />
                                                    Deep Research
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <GlobeIcon />
                                                    Web Search
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <InputGroupButton
                                            type="submit"
                                            variant="default"
                                            size="icon-sm"
                                            disabled={!nextMessage || isBusy}
                                            className="ml-auto bg-teal-400 hover:bg-teal-500 text-zinc-950 border-none transition-colors disabled:bg-teal-400/50 disabled:text-zinc-950/50"
                                        >
                                            <ArrowUpIcon />
                                            <span className="sr-only">Send</span>
                                        </InputGroupButton>
                                    </InputGroupAddon>
                                </InputGroup>
                            </form>
                        </CardFooter>
                    </Card>
                    <div className="px-0.5 text-center text-xs text-muted-foreground">
                        Demo is read only. Press send to send messages.
                    </div>
                </div>
            </MessageScrollerProvider>
        </TooltipProvider>
    )
}
