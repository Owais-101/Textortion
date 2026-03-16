import React from 'react';
import {
    CodeBlock,
    CodeBlockBody,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockFilename,
    CodeBlockFiles,
    CodeBlockHeader,
    CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { useAnimations } from '@/context/AnimationsContext';

const CodeBlockSection = () => {

    const { animationsData, selected, animCode } = useAnimations();
    const code = [
        {
            language: "jsx",
            filename: "Textortion.jsx",
            code: animCode
        }
    ]


    return (
        <div className='w-full h-fit mt-5'>
            <h1 className='mb-2 font-heading text-xl lg:text-2xl font-extrabold' >Code</h1>
            <CodeBlock className='border-muted rounded-xl' key={selected} data={code} defaultValue={code[0].language}>
                <CodeBlockHeader className='border-muted'>
                    <CodeBlockFiles>
                        {(item) => (
                            <CodeBlockFilename key={item.language} value={item.language}>
                                {item.filename}
                            </CodeBlockFilename>
                        )}
                    </CodeBlockFiles>
                    <CodeBlockCopyButton
                        onCopy={() => console.log("Copied code to clipboard")}
                        onError={() => console.error("Failed to copy code to clipboard")}
                    />
                </CodeBlockHeader>
                <CodeBlockBody>
                    {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                            <CodeBlockContent>
                                {item.code}
                            </CodeBlockContent>
                        </CodeBlockItem>
                    )}
                </CodeBlockBody>
            </CodeBlock>
        </div>
    )
}

export default CodeBlockSection