import { NextRequest, NextResponse  } from "next/server";


class InMemoryRateLimiter{
    private store = new Map();
    

    async get(key){
        const entry = this.store.get(key)
        if(!entry) return null 

        ///check if  expired 
        if(Date.now()>entry.reset){
            this.store.delete(key);
            return null
        }
        return entry.count 

    }
         async set(key){
            this.store.set(key,{
                count,
            reset:Date.now()+ tt1 * 1000
            })
         }     
  

}