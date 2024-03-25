'use client'
import { useEffect } from 'react';

declare global {
    interface Window {
        watsonAssistantChatOptions: any;
    }
}

const WatsonChat = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.watsonAssistantChatOptions = {
                integrationID: "6e38a39f-e369-4040-8710-7922dd5524e6",
                region: "au-syd",
                serviceInstanceID: "edf3aa1c-cff1-459e-926c-e7f62fc090a5",
                onLoad: async (instance: any) => { await instance.render(); }
            };

            const scriptSrc = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
                const t = document.createElement('script');
                t.src = scriptSrc;
                document.head.appendChild(t);
            }
        }
    }, []);
    return null;
};

export default WatsonChat;