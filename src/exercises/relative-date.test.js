import {calculateRelativeDate} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {
  const dateNow = new Date();
  const testYear = dateNow.getFullYear();
  let testMonth = parseInt(dateNow.getMonth()) + 1;
  const testDate = dateNow.getDate();
 
  if(testMonth<10){
    testMonth = "0"+ testMonth;
  }
  
  let input = testYear +" "+ testMonth + " "+ testDate;
  it('Today', () => {
    //const input  = new Date(2023,11,13);
    const expected = 'TODO: Please see the above requirement';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal("Today");
  });
  it('Yesterday', () =>{
    const actual = calculateRelativeDate(testYear+" "+testMonth+" "+(testDate-1));
    expect(actual).to.equal("Yesterday");
  });
  it('This month', ()=>{
    const actual = calculateRelativeDate(testYear+" "+testMonth+" "+(parseInt(testDate)+8));
    expect(actual).to.equal("This month");
  });
  it('Last month', ()=>{
    const actual = calculateRelativeDate(testYear+" "+(parseInt(testMonth)-1)+" "+testDate);
    expect(actual).to.equal("Last month");
  });
  it('This week', ()=>{
    const actual = calculateRelativeDate(testYear+" "+testMonth+" "+(parseInt(testDate)-4));
    expect(actual).to.equal("This week");
  });
  it('Last week', ()=>{
    const actual = calculateRelativeDate(testYear+" "+testMonth+" "+(parseInt(testDate)-7));
    expect(actual).to.equal("Last week");
  });
  it('Last week but different date', ()=>{
    const actual = calculateRelativeDate(testYear+" "+testMonth+" "+(parseInt(testDate)-9));
    expect(actual).to.equal("Last week");
  });
  it('This year', ()=>{
    const actual = calculateRelativeDate(testYear+" "+12 + " " +31);
    expect(actual).to.equal("This year");
  });
  it('Last year', ()=>{
    const actual = calculateRelativeDate(parseInt(testYear)-1 +" "+12 + " " +31);
    expect(actual).to.equal("Last year");
  });
  it('Long back', ()=>{
    const actual = calculateRelativeDate(parseInt(testYear)-5 +" "+12 + " " +31);
    expect(actual).to.equal("Long back");
  });
  
});
