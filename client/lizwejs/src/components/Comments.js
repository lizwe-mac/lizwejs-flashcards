import React from "react";

const Comments = (props) => {
  return (
    <div className="mt-5">
      
      <form className="flex flex-col items-left gap-3 tr" action="">
        {/* <input
          className="border-2 pl-3 border-orange-600 h-10 rounded-md w-44"
          type="text"
          name="username"
          id=""
          placeholder="username"
        /> */}
        <label htmlFor=""><h3>{props.item.question}:</h3></label>
        <input
          className="border-[1px] align-text-top pl-3 border-orange-500 h-16 rounded-sm w-96"
          type="text"
          name="comment"
          id=""
          placeholder="Please leave a comment, analysis or question"
        />
        <button className="bg-orange-600 h-8 text-white border-2 w-96 border-orange-500 rounded-sm">
          Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
