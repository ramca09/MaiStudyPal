import Accordion from "./accordion";

const ChatItem = ({ isAI, content, metadata, handleSelect }) => {
  return (
    <>
      {isAI ? (
        <div className="chat chat-start">
          <div className="chat-bubble bg-base-100 text-black shadow whitespace-pre-line">
            {content}
            {metadata ? (
              <div className="mt-3">
                <Accordion metadata={metadata} handleSelect={handleSelect} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="chat chat-end">
          <div className="chat-bubble bg-base-100 text-black shadow whitespace-pre-line">
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatItem;
