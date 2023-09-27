import { BiDislike, BiLike, BiMenuAltLeft } from "react-icons/bi";

type CommentProps = {
  commentsCount: number;
  authors: string[];
};

export const Comments = ({ commentsCount, authors }: CommentProps) => {
  return (
    <section className="flex w-full flex-col gap-5">
      {/* ------------------- Comments count and filter ---------------------- */}
      <div className="flex w-full items-center justify-start gap-5">
        <span>{commentsCount} Commments</span>
        <div className="flex items-center gap-2">
          <BiMenuAltLeft size={25} />
          <span className="text-sm font-semibold">Sort by</span>
        </div>
      </div>
      {/* ------------------- Author and input message ---------------------- */}
      <div className="flex w-full items-center gap-4">
        <div className="min-w-10 h-10 w-10 flex-shrink-0 cursor-pointer overflow-hidden rounded-full bg-teal-400">
          <img
            src="https://i.pinimg.com/1200x/8d/ec/23/8dec23953cb4b536f0cf0b7734944e6c.jpg"
            alt="user"
            className="w-ful h-full"
          />
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full border-b border-neutral-300 pb-1 outline-none placeholder:text-neutral-700"
        />
      </div>
      {/* ------------------- Comments ---------------------- */}
      {authors.map((author: string, index: number) => {
        return (
          <div key={index} className="flex w-full items-start gap-4">
            <div className="min-w-10 h-10 w-10 flex-shrink-0 cursor-pointer overflow-hidden rounded-full bg-teal-400">
              <img
                src="https://i.pinimg.com/1200x/8d/ec/23/8dec23953cb4b536f0cf0b7734944e6c.jpg"
                alt="user"
                className="w-ful h-full"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-semibold">
                @{author.replace(/\s+/g, "").toLowerCase()}
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
                ullamcorper eget nulla facilisi etiam dignissim diam.
              </span>
              <div className="u flex items-center gap-2">
                <div className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-200">
                  <BiLike size={20} />
                </div>
                <div className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-200">
                  <BiDislike size={20} />
                </div>
                <div className="flex h-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full px-3 font-semibold hover:bg-neutral-200">
                  Reply
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
