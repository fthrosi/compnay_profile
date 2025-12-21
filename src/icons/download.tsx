type DownloadProps = {
  className?: string;
};

export const Download = ({ className }: DownloadProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5002 15.3333L6.7085 10.5416L8.05016 9.152L10.5418 11.6437V3.83325H12.4585V11.6437L14.9502 9.152L16.2918 10.5416L11.5002 15.3333ZM5.75016 19.1666C5.22308 19.1666 4.77202 18.9791 4.397 18.604C4.02197 18.229 3.83413 17.7776 3.8335 17.2499V14.3749H5.75016V17.2499H17.2502V14.3749H19.1668V17.2499C19.1668 17.777 18.9793 18.2284 18.6043 18.604C18.2293 18.9797 17.7779 19.1672 17.2502 19.1666H5.75016Z"
        fill="currentColor"
      />
    </svg>
  );
};
