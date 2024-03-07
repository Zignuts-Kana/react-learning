// import { createContext, useContext, useRef } from "react";
// import { atom, createStore, useAtomValue, useSetAtom } from "jotai";
import "./App.css";
import Panel from "./page/Panel";
import Layout from "./components/Layout";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./page/About";

// const messagesAtom = atom<string[]>([]);
// const messageCountAtom = atom((get) => get(messagesAtom).length);
// const currentMessageAtom = atom("");

// const ChatContext = createContext<ReturnType<typeof createStore> | null>(null);

// const useMessages = () =>
//   useAtomValue(messagesAtom, {
//     store: useContext(ChatContext)!,
//   });
// const useCurrentMessage = () =>
//   useAtomValue(currentMessageAtom, {
//     store: useContext(ChatContext)!,
//   });
// const useMessageCount = () =>
//   useAtomValue(messageCountAtom, {
//     store: useContext(ChatContext)!,
//   });
// const useSetCurrentMessage = () =>
//   useSetAtom(currentMessageAtom, {
//     store: useContext(ChatContext)!,
//   });
// const useSetMessages = () =>
//   useSetAtom(messagesAtom, {
//     store: useContext(ChatContext)!,
//   });

// const Chat = () => {
//   const currentMessage = useCurrentMessage();
//   const messages = useMessages();
//   const messageCount = useMessageCount();
//   const setCurrentMessage = useSetCurrentMessage();
//   const setMessages = useSetMessages();
//   console.log(messageCount);

//   return (
//     <div>
//       {messages.map((message, index) => (
//         <div key={index} className="chat-message">
//           {message}
//         </div>
//       ))}
//       <div className="chat-count">Message Count: {messageCount}</div>
//       <div className="chat-input">
//         <input
//           value={currentMessage}
//           onChange={(e) => {
//             setCurrentMessage(e.target.value);
//           }}
//         />
//       </div>
//       <div className="chat-button">
//         <button
//           onClick={() => {
//             setMessages([...messages, currentMessage]);
//             setCurrentMessage("");
//           }}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// const ChatContainer = () => {
//   const chatStore = useRef(createStore());
//   return (
//     <div className="chat">
//       <ChatContext.Provider value={chatStore.current}>
//         <Chat />
//       </ChatContext.Provider>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="chat-area">
//       <ChatContainer />
//       <ChatContainer />
//       <ChatContainer />
//       <ChatContainer />
//     </div>
//   );
// }

const App = () => {
  return (
    <Suspense fallback={"Loader"}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" index element={<Panel />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
