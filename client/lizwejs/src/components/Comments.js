import React from "react";

const Comments = () => {
  return <div className="absolute left-2/4 -translate-x-3/4 top-3/4">
    <form className="flex flex-col items-left gap-3 tr" action="">
    <input className="border-2 pl-3 border-orange-600 h-10 rounded-md w-44" type="text" name="username" id="" placeholder="username"/>
    <input className="border-2 align-text-top pl-3 border-orange-600 h-28 rounded-md w-96" type="text" name="comment" id="" placeholder="comment"/>
    <button className="bg-orange-600 h-12 text-white border-2 self-end w-44 border-orange-600 rounded-md">Comment</button>
    </form>
  </div>;
};

export default Comments;
