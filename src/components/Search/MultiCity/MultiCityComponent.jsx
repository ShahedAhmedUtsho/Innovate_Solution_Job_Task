import {
  addSegmentItem,
  DeleteSegmentItem,
  MultiCityStore,
} from "@/Store/MultiCityStore";

import { Button } from "@/components/ui/button";
import MultiDepture from "./MultiDepture";
import MultiArrival from "./MultiArrival";
import MultiDeparturedate from "./MultiDeparturedate";

import { X } from "lucide-react";

const MultiCityComponent = () => {
  const segmantedData = MultiCityStore.useState((s) => s.Segment);

  const addSegmentItemFn = () => {
    addSegmentItem();
  };
  const removeSegmentItemFn = (id) => {
    
    DeleteSegmentItem(id);
  };

  return (
    <div>
      {segmantedData.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end"
          >
            <MultiDepture UniqueId={item.id} />
            <MultiArrival UniqueId={item.id} />
            <MultiDeparturedate UniqueId={item.id} />

            <Button
              className=" text-red-500 p-0  hover:bg-transparent !rounded-0  bg-transparent   "
              onClick={() => {
                removeSegmentItemFn(item.id);
              }}
            >
              <X />
            </Button>
          </div>
        );
      })}
      <div className="flex justify-end items-center mr-5">
        <Button
          className=" my-3 text-xs  rounded-0 uppercase border-2 text-green-600 bg-green-500/10 border-dashed border-green-600 "
          variant="outline"
          onClick={addSegmentItemFn}
        >
          add segment
        </Button>
      </div>
    </div>
  );
};

export default MultiCityComponent;
