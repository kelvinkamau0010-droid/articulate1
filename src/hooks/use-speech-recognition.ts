import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Thin wrapper around the browser's built-in SpeechRecognition API
 * (Chrome/Edge only — `supported` is false everywhere else, so callers
 * should offer a text-input fallback when it is).
 */
export function useSpeechRecognition() {
  const [listening, setListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [supported, setSupported] = useState(false);
  const recognitionRef = useRef<any>(null);
  const onResultRef = useRef<(finalTranscript: string) => void>(() => {});

  useEffect(() => {
    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionCtor) {
      setSupported(false);
      return;
    }
    setSupported(true);

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0].transcript as string;
        if (result.isFinal) {
          onResultRef.current(transcript.trim());
        } else {
          interim += transcript;
        }
      }
      setInterimTranscript(interim);
    };

    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  const start = useCallback((onResult: (finalTranscript: string) => void) => {
    onResultRef.current = onResult;
    setInterimTranscript("");
    recognitionRef.current?.start();
    setListening(true);
  }, []);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  return { supported, listening, interimTranscript, start, stop };
}
