export class DatePickerService {
getStartTime(date){
    
    let startTime = new Date(date).setHours(0);
    startTime = new Date(startTime).setMinutes(0);
    startTime = new Date(startTime).setSeconds(0);
    startTime = new Date(startTime).setMilliseconds(0);
    startTime = new Date(startTime).getTime();

    return startTime;
  }

  getEndTime(date){
    
    let endTime = new Date(date).setHours(23);
    endTime = new Date(endTime).setMinutes(59);
    endTime = new Date(endTime).setSeconds(59);
    endTime = new Date(endTime).setMilliseconds(999);
    endTime = new Date(endTime).getTime();

    return endTime;
  }

  getCurrentStartTime(){
    
    let currentTime = new Date().setHours(0);
    currentTime = new Date(currentTime).setMinutes(0);
    currentTime = new Date(currentTime).setSeconds(0);
    currentTime = new Date(currentTime).setMilliseconds(0);
    currentTime = new Date(currentTime).getTime();

    return currentTime;
  }

  getCurrentEndTime(){
    
    let currentTime = new Date().setHours(23);
    currentTime = new Date(currentTime).setMinutes(59);
    currentTime = new Date(currentTime).setSeconds(59);
    currentTime = new Date(currentTime).setMilliseconds(999);
    currentTime = new Date(currentTime).getTime();

    return currentTime;
  }
}