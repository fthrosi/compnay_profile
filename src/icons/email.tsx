type EmailIconProps = {
  className?: string;
};

export default function EmailIcon({ className }: EmailIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 4.99992C18.3333 4.08325 17.5833 3.33325 16.6666 3.33325H3.33329C2.41663 3.33325 1.66663 4.08325 1.66663 4.99992V14.9999C1.66663 15.9166 2.41663 16.6666 3.33329 16.6666H16.6666C17.5833 16.6666 18.3333 15.9166 18.3333 14.9999V4.99992ZM16.6666 4.99992L9.99996 9.16659L3.33329 4.99992H16.6666ZM16.6666 14.9999H3.33329V6.66659L9.99996 10.8333L16.6666 6.66659V14.9999Z"
        fill="currentColor"
      />
    </svg>
  );
}
