const AnnouncementUI = () => {
  return (
    <div className="bg-white rounded-md">
      {/* Title start */}
      <div className=" flex flex-row items-center justify-between">
        <h1 className="text-xl font-semibold">Announcement</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      {/* Title end */}

      <div className="flex flex-col gap-4 mt-4">
        {/* Announcement 1 start */}
        <div className="rounded-md bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        {/* Announcement 1 end */}

        {/* Announcement 2 start */}
        <div className="rounded-md bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        {/* Announcement 2 end */}

        {/* Announcement 3 start */}
        <div className="rounded-md bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        {/* Announcement 3 end */}
      </div>
    </div>
  );
};

export default AnnouncementUI;
