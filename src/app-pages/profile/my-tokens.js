import React from "react";
import { connect } from "redux-bundler-react";
import TokenCreatedModal from "./token-created-modal";

const CreateTokenButton = connect(
  "selectAuthTokenRaw",
  "selectApiRoot",
  "doModalOpen",
  "doProfileFetch",
  ({ authTokenRaw: authToken, apiRoot, doModalOpen, doProfileFetch }) => {
    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      fetch(`${apiRoot}/cumulus/my_tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log("ERROR Creating Token");
            console.log(`Request returned a ${response.status}`);
          }
          return response.json();
        })
        .then((j) => {
          doModalOpen(TokenCreatedModal, { secretTokenInfo: j });
          doProfileFetch();
        });
    };

    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Token <i className="mdi mdi-plus" />
      </button>
    );
  }
);

const DeleteTokenButton = connect(
  "doProfileTokenDelete",
  ({ doProfileTokenDelete, item }) => {
    const handleClick = (e) => {
      doProfileTokenDelete(item);
    };

    return (
      <i
        className="mdi mdi-close hover:bg-blue-400 hover:shadow-2xl"
        onClick={handleClick}
      />
    );
  }
);

export default connect("selectProfileTokens", ({ profileTokens: tokens }) => (
  <>
    <div className="flex flex-row justify-between mb-2">
      <span className="text-3xl text-gray-600">
        My Tokens
        <span className="text-xl ml-3 p-3 rounded-full bg-blue-200 rounded">
          {tokens.length}
        </span>
      </span>
      <CreateTokenButton />
    </div>
    <div className="rounded-lg border hover:border-blue-400 bg-gray-100 p-4 shadow-lg">
      <div>
        {tokens.map((t, idx) => (
          <div key={idx} className="flex flex-row justify-between">
            <div className="flex flex-row">
              <DeleteTokenButton item={t} />
              <div className="ml-5 font-mono">{t.token_id}</div>
            </div>
            <div className="ml-2">{t.issued}</div>
          </div>
        ))}
      </div>
    </div>
  </>
));
