import { useState, useEffect } from "react";

export const useTableSearch = ({
  searchVal,
  retrieve,
}: {
  searchVal: any;
  retrieve: any;
}) => {
  const [filteredData, setFilteredData] = useState<any>([]);
  const [origData, setOrigData] = useState<any>([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const crawl = (user: any, allValues: any) => {
      if (!allValues) allValues = [];
      for (var key in user) {
        if (typeof user[key] === "object") crawl(user[key], allValues);
        else allValues.push(user[key] + " ");
      }
      return allValues;
    };
    const fetchData = async () => {
      const { data: users } = await retrieve();
      setOrigData(users);
      setFilteredData(users);
      const searchInd = users?.map((user: any) => {
        const allValues = crawl(user, null);
        return { allValues: allValues.toString() };
      });
      setSearchIndex(searchInd);
      console.log(origData);
      if (users) setLoading(false);
    };
    fetchData();
  }, [retrieve]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex?.map(
        (user: { allValues: string }, index: string | number) => {
          if (
            user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0
          )
            return origData[index];
          return null;
        }
      );
      setFilteredData(
        reqData.filter((user: any) => {
          if (user) return true;
          return false;
        })
      );
    } else setFilteredData(origData);
  }, [searchVal, origData, searchIndex]);

  return { filteredData, loading };
};
