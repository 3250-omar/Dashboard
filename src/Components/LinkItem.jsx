const LinkItem = ({ href, text, icon: Icon, badge }) => {
  return (
    <ul>
      <li className="flex items-center justify-start gap-2 px-2 py-4 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded  text-gray-900">
        <a
          href={href}
          className="font-medium dark:text-white flex items-center justify-start gap-2"
        >
          <Icon className=" dark:text-white " />
          <span> {text}</span>
          {badge && (
            <span
              className={` inline-flex items-center justify-center ms-3 rounded-full font-medium text-sm ${badge.color} dark:bg-gray-200 px-3 text-center`}
            >
              {badge.text}
            </span>
          )}
        </a>
      </li>
    </ul>
  );
};

export default LinkItem;
