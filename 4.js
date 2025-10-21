function fromMillenium() {
    const now = new Date();
    const millennium = new Date('2000-01-01T00:00:00Z'); 
    const diffMs = now - millennium; 

    const hoursValue = diffMs / (1000 * 60 * 60); 
    const daysValue = diffMs / (1000 * 60 * 60 * 24); 

    return {
        hours: {
            value: hoursValue,
            log: () => console.log(Math.round(hoursValue))
        },
        days: {
            value: daysValue,
            log: () => console.log(Math.floor(daysValue)) 
        }
    };
}


const { days, hours } = fromMillenium();

console.log(days.value); 
days.log();   

console.log(hours.value); 
hours.log();       

module.exports = { fromMillenium };