'use strict';

function makeStudentsReport(data) {
  const studentReports = [];
    for (let i = 0; i < data.length; i++) {
      studentReports.push(data[i]['name'] + ': ' + data[i]['grade']);
    }
  return studentReports;
}