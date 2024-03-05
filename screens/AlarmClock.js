import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AlarmClock = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedAmPm, setSelectedAmPm] = useState('AM');

  const handleSetAlarm = () => {
    setShowPicker(true);
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      const hour = selectedTime.getHours() % 12 || 12;
      const minute = selectedTime.getMinutes();
      const formattedHour = hour < 10 ? `0${hour}` : hour;
      const formattedMinute = minute < 10 ? `0${minute}` : minute;
      setAlarmTime(`${formattedHour}:${formattedMinute} ${selectedAmPm}`);
    }
    setShowPicker(false);
  };

  const handleAmPmChange = (newAmPm) => {
    setSelectedAmPm(newAmPm);
    if (alarmTime !== '') {
      setAlarmTime((prevTime) => {
        const timeArr = prevTime.split(' ');
        timeArr[1] = newAmPm;
        return timeArr.join(' ');
      });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Text style={[styles.title, { color: 'black' }]}>Alarm Clock</Text>
      <Text style={[styles.alarmTime, { color: 'black' }]}>{alarmTime}</Text>
      <Button title="Set Alarm" onPress={handleSetAlarm} color="black" />
      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={handleTimeChange}
        />
      )}
      <View style={styles.amPmContainer}>
        <TouchableOpacity onPress={() => handleAmPmChange('AM')} style={[styles.amPmButton, { backgroundColor: selectedAmPm === 'AM' ? 'black' : '#dddddd' }]}>
          <Text style={[styles.amPmButtonText, { color: selectedAmPm === 'AM' ? 'white' : 'black' }]}>AM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAmPmChange('PM')} style={[styles.amPmButton, { backgroundColor: selectedAmPm === 'PM' ? 'black' : '#dddddd' }]}>
          <Text style={[styles.amPmButtonText, { color: selectedAmPm === 'PM' ? 'white' : 'black' }]}>PM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  alarmTime: {
    fontSize: 20,
    marginBottom: 20,
    
  },
  amPmContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  amPmButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  amPmButtonText: {
    fontSize: 16,
  },
});

export default AlarmClock;
