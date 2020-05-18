extension DayUtils on DateTime {
  /// The UTC date portion of a datetime, without the minutes, seconds, etc.
  DateTime get atMidnight {
    return DateTime.utc(year, month, day);
  }

  /// Checks that the two [DateTime]s share the same date.
  bool isSameDay(DateTime d2) {
    return this.year == d2.year && this.month == d2.month && this.day == d2.day;
  }
}
