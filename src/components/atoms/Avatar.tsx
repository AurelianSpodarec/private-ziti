import {
  UIAvatar,
  UIAvatarFallback,
  UIAvatarImage,
} from "@/components/ui/ui-avatar"

interface IAvatar {
  verified?: boolean;
  size: string;
  shape: "rounded-full";
  border: string;
}

function Avatar({ verified }: IAvatar) {
  return (
    <UIAvatar>
      <UIAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <UIAvatarFallback>CN</UIAvatarFallback>

      {verified &&
        <div className="absolute bottom-0 right-0 h-6 w-6">
          <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="white" />
            <path d="M11.8125 24.8438L10.0312 21.8438L6.65625 21.0938L6.98438 17.625L4.6875 15L6.98438 12.375L6.65625 8.90625L10.0312 8.15625L11.8125 5.15625L15 6.51563L18.1875 5.15625L19.9687 8.15625L23.3438 8.90625L23.0156 12.375L25.3125 15L23.0156 17.625L23.3438 21.0938L19.9687 21.8438L18.1875 24.8438L15 23.4844L11.8125 24.8438ZM14.0156 18.3281L19.3125 13.0312L18 11.6719L14.0156 15.6562L12 13.6875L10.6875 15L14.0156 18.3281Z" fill="#5398FF" />
          </svg>
        </div>
      }
    </UIAvatar>
  )
}

export default Avatar;
