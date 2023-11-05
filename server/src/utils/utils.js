export const secret = 'as19pP8FpnI5lA2Abp04ZMtJaFWpVckNnDGnFz1tb0SIV5do0hLpFnyny4EJi2L0KPkBIzfW8DqwslJQxunbwUAI2XMesBteACmhIoSonP9PMOmPQGHIzYpwQ9DOJRXTdR3QpRBva7eljY1kueD4M1LDTC38laqntmQ9VmLzEZicmX4yc6U90vX58DmdMJDrkqhdc8c90HUHCBGtystIXBV3XAtSciYNDeicmgrlEEDqrLM89POhIah550VmIE3mlR7DBfzhbfOAAJWlmnBqy3lmsnGYEX5eUeH1QsLfCp5F';

let now = new Date();
now.setDate(now.getDate() + 3);
const endTime = now.getTime();
export let antiques =  [
    {
        id: "1",
        name: "Bulgarian Orthodox Vase",
        type: "vase",
        origin: "Bulgaria",
        year: 1760,
        material: "Porcelain",
        description: "old vase",
        startTime: Date.now(),
        endTime: endTime,
        startingPrice: 800,
        image: "https://i.etsystatic.com/12242579/r/il/600d1c/4006288033/il_fullxfull.4006288033_ah1y.jpg"
    },
    {
        id: "2",
        name: "Panagyurishte Treasure",
        type: "Treasure",
        origin: "Bulgaria",
        year: -400,
        material: "Gold",
        description: "The treasure consists of a phiale, an amphora, three oinochoai and four rhytons with total weight of 6.164 kg of 24-karat gold. All nine vessels are richly and skilfully decorated. It is dated from the turn of the 4th-3rd centuries BC. It is thought to have been used as a royal ceremonial set by the Thracian king Seuthes III.",
        startTime: Date.now(),
        endTime: endTime,
        startingPrice: 10000000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg/1280px-Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg"

    }
]