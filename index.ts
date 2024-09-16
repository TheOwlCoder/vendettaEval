import { commands } from "@vendetta";
import { findByProps } from "@vendetta/metro";

const MessageActions = findByProps("sendMessage", "receiveMessage");
const Locale = findByProps("Messages");


let patches = [];

export default {
    onLoad: () => {
        patches.push(commands.registerCommand({
            name: "Evaluate",
            displayName: "Eval",
            description: "Evaluate Javascript Code",
            displayDescription: "Evaluate Javascript Code",
            options: [{
                name: "code",
                displayName: "code",
                description: Locale.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                displayDescription: Locale.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                required: true,
                // @ts-ignore
                type: 3
            }],
            // @ts-ignore
            applicationId: -1,
            inputType: 1,
            type: 1,
        
            execute: (args, ctx) => {
               
                MessageActions.sendMessage(ctx.channel.id, {
                    content: "test message for eval cmd"
                })
            }
        }));
    },
    onUnload: () => {
        for (const unpatch of patches) unpatch()
    }
}