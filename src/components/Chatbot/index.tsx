"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}

// Componente responsável por integrar o chatbot nas páginas do projeto.
const WatsonChat = () => {
  let serviceTokens: any;
  let webChatInstance: any;
  let currentStream: any;
  let isRecording: boolean = false;

  function generateTextFromMessage(message: any) {
    return message.output.generic.map((message) => message.text).join(" ");
  }

  function handleMessageReceive(event: any) {
    const synthText = generateTextFromMessage(event.data);
    const audio = WatsonSpeech.TextToSpeech.synthesize({
      text: synthText,
      accessToken: serviceTokens.ttsToken,
      url: serviceTokens.ttsURL,
    });
    audio.onerror = function (error: any) {
      console.error("TextToSpeech error", error);
    };
  }

  function sendTextToAssistant(text: any) {
    const sendObject = { input: { text } };
    webChatInstance.send(sendObject);
  }

  function onStartRecord() {
      const stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
      accessToken: serviceTokens.sttToken,
      url: serviceTokens.sttURL,
      model: "en-US_Multimedia",
      objectMode: true,
    });

    stream.on("data", function (data: any) {
      console.log("Received SpeechToText data", data);
      if (data.results[0] && data.results[0].final) {
        stream.stop();
        currentStream = null;
        console.log("Stopped listening");
        setButtonState(false);

        const text = data.results[0].alternatives
          .map((message) => message.transcript)
          .join(" ");
        sendTextToAssistant(text);
      }
    });

    stream.on("error", function (error: any) {
      console.error("SpeechToText error", error);
    });

    currentStream = stream;
  }

  function onStopRecord() {
    if (currentStream) {
      currentStream.stop();
    }
    currentStream = null;
  }

  function setButtonState(localIsRecording: any) {
    isRecording = localIsRecording;
    const recordButton = document.querySelector(".RecordButton");
    if (recordButton) {
      recordButton.innerHTML = getButtonHTML(isRecording);
    }
  }

  function getButtonHTML(isRecording: any) {
    let buttonContent;
    if (isRecording) {
      buttonContent = `
          <svg viewBox="0 0 32 32">
            <path d="M23,14v3A7,7,0,0,1,9,17V14H7v3a9,9,0,0,0,8,8.94V28H11v2H21V28H17V25.94A9,9,0,0,0,25,17V14Z" />
            <path d="M16,22a5,5,0,0,0,5-5V7A5,5,0,0,0,11,7V17A5,5,0,0,0,16,22Z" />
          </svg>
          Stop recording
        `;
    } else {
      buttonContent = `
          <svg viewBox="0 0 32 32">
            <path d="M23,14v3A7,7,0,0,1,9,17V14H7v3a9,9,0,0,0,8,8.94V28H11v2H21V28H17V25.94A9,9,0,0,0,25,17V14Z"/>
            <path d="M16,22a5,5,0,0,0,5-5V7A5,5,0,0,0,11,7V17A5,5,0,0,0,16,22ZM13,7a3,3,0,0,1,6,0V17a3,3,0,0,1-6,0Z"/>
          </svg>
          Start recording
        `;
    }

    return buttonContent;
  }

  function onButtonClick() {
    setButtonState(!isRecording);
    if (isRecording) {
      onStartRecord();
    } else {
      onStopRecord();
    }
  }

  function addRecordButton(instance: any) {
    const button = document.createElement("button");
    button.classList.add("RecordButton");
    button.classList.add("cds--btn");
    button.classList.add("cds--btn--primary");
    button.innerHTML = getButtonHTML(false);
    button.addEventListener("click", onButtonClick);

    instance.writeableElements.beforeInputElement.appendChild(button);
  }

  async function getChatbot() {
    if (typeof window !== "undefined") {
      window.watsonAssistantChatOptions = {
        integrationID: "6e38a39f-e369-4040-8710-7922dd5524e6",
        region: "au-syd",
        serviceInstanceID: "edf3aa1c-cff1-459e-926c-e7f62fc090a5",
        onLoad: async (instance: any) => {
          const result = await fetch("/api/ibm");
          serviceTokens = await result.json();

          // Register the handler that will process messages received from the assistant so they can be converted to speech.
          instance.on({ type: "receive", handler: handleMessageReceive });

          // Add a record button to the UI that can be used to start and stop recording speech.
          addRecordButton(instance);

          // This is not normally required but we want to bypass the home screen for this example.
          instance.updateHomeScreenConfig({ is_on: false });

          await instance.updateLocale("pt-br");
          await instance.render();
        },
      };

      const scriptSrc =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const t = document.createElement("script");
        t.src = scriptSrc;
        document.head.appendChild(t);
      }
    }
  }
  useEffect(() => {
    getChatbot();
  });
  return null;
};

export default WatsonChat;
