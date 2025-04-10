type CardBenefitProps = {
    icon: string;
    title: string;
    description: string;
    link: string;
    linkText?: string;
    bgColor?: string;
    textColor?: string;
  };
  
  export const CardBenefit: React.FC<CardBenefitProps> = ({
    icon,
    title,
    description,
    link,
    linkText = "Saiba mais",
    bgColor = "bg-red-700",
    textColor = "text-white",
  }) => {
    return (
      <div className={`${bgColor} ${textColor} rounded-2xl p-6 max-w-sm relative shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
        <div className="text-5xl mb-4">{icon}</div>
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className={`${textColor}/90 text-base leading-relaxed mb-6`}>
          {description}
        </p>
        <a
          href={link}
          className={`inline-flex items-center text-sm font-medium ${textColor} hover:underline`}
        >
          {linkText}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
  
        <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-sm rounded-full p-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    );
  };  