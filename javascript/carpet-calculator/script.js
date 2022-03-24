function calculateCarpet() {
    // 👇 Write your code here 👇
    let room1Width = getRoomWidth(1);
    let room1Length = getRoomLength(1);
    let room2Width = getRoomWidth(2);
    let room2Length = getRoomLength(2);
  
    let room1Total = room1Width * room1Length;
    let room2Total = room2Width * room2Length;
    let totalArea = (room1Total + room2Total) * 1.1;
    
    showResult(totalArea);
    console.log("click");
    // 👆 Write your code here 👆
  }