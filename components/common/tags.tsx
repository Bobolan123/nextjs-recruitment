const TagNewForYou = () => {
    return (
        <div className=" inline-flex items-center rounded-l border-l-4 bg-blue-600 text-white font-semibold text-sm py-1 px-3  right-0">
            NEW FOR YOU
            <div className=" top-full right-0 border-l-8 border-transparent border-t-8 border-t-blue-600"></div>
        </div>
    );
};

const TagSuperHot = () => {
    return (
        <div className=" inline-flex items-center rounded-l bg-red-600 text-white font-semibold text-sm py-1 px-3 gap-1 right-0">
            <svg
                fill="none"
                height="15"
                viewBox="0 0 12 15"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    clip-rule="evenodd"
                    d="M8.35103 7.22088C8.77945 5.51855 9.97941 4.56322 11.074 4.45661C9.84457 6.98536 12.8712 8.79743 11.1649 11.8192C10.2049 13.5193 8.33941 14.4836 6.25533 14.4997C0.303047 14.5458 -0.829202 8.4487 1.27822 4.29598C0.712659 8.76776 4.77576 8.50349 3.49039 5.62166C2.56746 3.55246 4.57378 0.432578 7.73614 0.50111C5.5579 3.61357 8.78633 4.4127 8.35103 7.22088Z"
                    fill-rule="evenodd"
                    fill="#FFDD85"
                ></path>
            </svg>
            SUPER HOT
            <div className="absolute top-full right-0 border-l-8 border-transparent border-t-8 border-t-red-600"></div>
        </div>
    );
};

const TagHot = () => {
    return (
        <div className="inline-flex items-center rounded-l bg-yellow-500 text-white font-semibold text-sm py-1 px-3 right-0">
            HOT
            <div className="absolute top-full right-0 border-l-8 border-transparent border-t-8 border-t-yellow-500"></div>
        </div>
    );
};

const TagCompanySpotLight = () => {
    return (
        <div className="absolute rounded-r bg-yellow-500 text-white font-semibold text-sm py-1 px-3 left-0 top-2 z-50">
            Company Spotlight
            <div className="absolute top-full left-0 border-b-8 border-transparent border-l-8 border-l-yellow-500 z-50"></div>


        </div>
    );
};
export { TagHot, TagNewForYou, TagSuperHot, TagCompanySpotLight };
