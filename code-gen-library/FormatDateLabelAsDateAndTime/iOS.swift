//begin imports
//end imports

class FormatDateLabelAsDateAndTime {

    //begin eventHandler
    //Swift: Any?___String?
    func formatDateLabelAsDateAndTime(sender: Any?, item: Any?) -> String? {
        let calendar: Calendar = {
            switch item {
            case let cal as Calendar:
                return cal

            case let date as Date:
                var cal = Calendar.current
                cal.timeZone = TimeZone.current
                return cal

            case let map as [String: Any]:
                if let dateValue = map["Date"] {
                    if let date = dateValue as? Date {
                        var cal = Calendar.current
                        cal.timeZone = TimeZone.current
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
                let millis = Int64(ticks)
                var cal = Calendar.current
                cal.timeZone = TimeZone.current
                return cal

            default:
                do {
                    if let item = item {
                        let mirror = Mirror(reflecting: item)
                        if let dateProp = mirror.children.first(where: { $0.label == "date" })?.value {
                            if let date = dateProp as? Date {
                                var cal = Calendar.current
                                cal.timeZone = TimeZone.current
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

        return String(format: "%04d-%02d-%02d %02d:%02d:%02d",
                      calendar.component(.year, from: Date()),
                      calendar.component(.month, from: Date()),
                      calendar.component(.day, from: Date()),
                      calendar.component(.hour, from: Date()),
                      calendar.component(.minute, from: Date()),
                      calendar.component(.second, from: Date()))
    }
    //end eventHandler
}
