import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Calendar as CalendarComponent } from 'react-native-calendars';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <View style={styles.calendarContainer}>
        <CalendarComponent
          current={selectedDate}
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: 'black',
              color: 'white',
            },
            [new Date().toISOString().slice(0, 10)]: {
              selected: true,
              selectedColor: 'black',
              textColor: 'white',
              style: { fontWeight: 'bold' }, 
            },
          }}
          theme={{
            calendarBackground: 'white',
            textSectionTitleColor: 'black',
            selectedDayBackgroundColor: 'black',
            selectedDayTextColor: 'white',
            todayTextColor: 'black',
            dayTextColor: 'black',
            textDisabledColor: 'gray',
            dotColor: 'blue',
            selectedDotColor: 'blue',
            arrowColor: 'black',
            monthTextColor: 'black',
            indicatorColor: 'black',
            textDayFontWeight: 'normal',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        />
      </View>
      <View style={styles.selectedDateContainer}>
        {selectedDate !== '' && (
          <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width, 
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
  },
  calendarContainer: {
    flex: 1, 
    // borderWidth: 1,
    // borderColor: 'black',
    // borderRadius: 10,
    width: Dimensions.get('window').width, 
    padding: 10,
    marginBottom: 20,
    // width: '80%',
    backgroundColor: 'white',
  },
  selectedDateContainer: {
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 20,
    color: 'black',
  },
});

export default Calendar;
