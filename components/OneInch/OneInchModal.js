import Image from "next/image";
 
function InchModal({ open, onClose, setToken, tokenList }) {
    if (!open) return null;

    return (
      <div style={{ overflow: "auto", height: "500px" }}>
        {!tokenList
          ? null
          : Object.keys(tokenList).map((token, index) => (
              <div
                style={{
                  padding: "5px 20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setToken(tokenList[token]);
                  onClose();
                }}
                key={index}
              >
                <Image
                    className="mr-23"                  
                    height={32}
                    width={32}
                  src={tokenList[token].logoURI}
                  alt="noLogo"
                />
                <div>
                  <h4>{tokenList[token].name}</h4>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "14px",
                    }}
                  >
                    {tokenList[token].symbol}
                  </span>
                </div>
              </div>
            ))}
      </div>
    );
  }
  
  export default InchModal;
  