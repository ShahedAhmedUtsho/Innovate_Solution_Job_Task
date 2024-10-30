import { SearchStore, useJourneyType,} from '@/Store/SearchStore';
import React from 'react';

const CommonBottomBar = () => {
//import SearchStore for data 

const booking_class = SearchStore.useState(s=> s.booking_class)

const a = useJourneyType()
    return (
        <div className="search_Bottom h-10 w-full bg-slate-200">

        <div>
            {booking_class +  a }
        </div>

      
      
          
      
      </div>
    );
};

export default CommonBottomBar;