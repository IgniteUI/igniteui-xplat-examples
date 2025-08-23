//begin imports
//end imports

class FormatDateLabelAsDate {

    //begin eventHandler
    //Swift: Any?___String?
    func formatDateLabelAsDate(sender: Any?, item: Any?) -> String? {
        let calendar: Calendar = {
            switch item {
            case let cal as Calendar:
                return cal

            case let date as Date:
                return Calendar.current.apply { $0.time = date }

            case let map as [String: Any]:
                if let dateValue = map["Date"] {
                    if let date = dateValue as? Date {
                        return Calendar.current.apply { $0.time = date }
                    } else if let cal = dateValue as? Calendar {
                        return cal
                    } else {
                        return Calendar.current // fallback
                    }
                } else {
                    return Calendar.current // fallback
                }

            case let dict as NSDictionary:
                if let dateValue = dict["Date"] {
                    if let date = dateValue as? Date {
                        return Calendar.current.apply { $0.time = date }
                    } else if let cal = dateValue as? Calendar {
                        return cal
                    } else {
                        return Calendar.current // fallback
                    }
                } else {
                    return Calendar.current // fallback
                }

            case let ticks as Double:
                let millis = Int64(ticks / 10000.0)
                return Calendar.current.apply { $0.timeInMillis = millis }

            default:
                do {
                    if let item = item {
                        let mirror = Mirror(reflecting: item)
                        if let dateProp = mirror.children.first(where: { $0.label == "date" })?.value {
                            if let date = dateProp as? Date {
                                return Calendar.current.apply { $0.time = date }
                            } else if let cal = dateProp as? Calendar {
                                return cal
                            }
                        }
                    }
                } catch {
                    return Calendar.current // fallback
                }
                return Calendar.current // fallback
            }
        }()

        return String(format: "%04d-%02d-%02d",
                      calendar.component(.year, from: calendar.date ?? Date()),
                      calendar.component(.month, from: calendar.date ?? Date()),
                      calendar.component(.day, from: calendar.date ?? Date()))
    }
    //end eventHandler
}
