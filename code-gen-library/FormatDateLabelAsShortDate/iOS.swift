//begin imports
//end imports

class FormatDateLabelAsShortDate {

    //begin eventHandler
    //Swift: Any?___String?
    func formatDateLabelAsShortDate(sender: Any?, item: Any?) -> String? {
        let calendar: Calendar = {
            switch item {
            case let cal as Calendar:
                return cal

            case let date as Date:
                var cal = Calendar.current
                cal.timeZone = TimeZone.current
                cal.time = date
                return cal

            case let map as [String: Any]:
                if let dateValue = map["Date"] {
                    if let date = dateValue as? Date {
                        var cal = Calendar.current
                        cal.timeZone = TimeZone.current
                        cal.time = date
                        return cal
                    } else if let cal = dateValue as? Calendar {
                        return cal
                    } else {
                        return Calendar.current
                    }
                } else {
                    return Calendar.current
                }

            case let dict as NSDictionary:
                if let dateValue = dict["Date"] {
                    if let date = dateValue as? Date {
                        var cal = Calendar.current
                        cal.timeZone = TimeZone.current
                        cal.time = date
                        return cal
                    } else if let cal = dateValue as? Calendar {
                        return cal
                    } else {
                        return Calendar.current
                    }
                } else {
                    return Calendar.current
                }

            case let ticks as Double:
                let millis = Int64(ticks / 10000.0)
                var cal = Calendar.current
                cal.timeZone = TimeZone.current
                cal.timeInMillis = millis
                return cal

            default:
                do {
                    if let item = item {
                        let mirror = Mirror(reflecting: item)
                        if let dateProp = mirror.children.first(where: { $0.label == "date" })?.value {
                            if let date = dateProp as? Date {
                                var cal = Calendar.current
                                cal.timeZone = TimeZone.current
                                cal.time = date
                                return cal
                            } else if let cal = dateProp as? Calendar {
                                return cal
                            }
                        }
                    }
                } catch {
                    return Calendar.current
                }
                return Calendar.current
            }
        }()

        return String(format: "%02d/%02d/%02d",
                      calendar.component(.month, from: Date()),
                      calendar.component(.day, from: Date()),
                      calendar.component(.year, from: Date()) % 100)
    }
    //end eventHandler
}
