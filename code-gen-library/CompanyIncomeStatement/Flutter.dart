//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart'
    show IReflectableData;
import 'package:igniteui_flutter_core/src/type.dart'
    show TypeInfo, Double_$type, String_$type;

class CompanyIncomeStatementItem implements IReflectableData {
  String date = '';
  double revenue = 0;
  double expenses = 0;
  double income = 0;
  double incomePerRevenue = 0;
  double revenueX = 0;
  double expensesX = 0;
  String formattedRevenue = '';
  String formattedExpenses = '';
  String formattedIncome = '';
  String formattedProfit = '';

  Map<String, TypeInfo?> get propertyTypes => {
        'Date': String_$type,
        'Revenue': Double_$type,
        'Expenses': Double_$type,
        'Income': Double_$type,
        'IncomePerRevenue': Double_$type,
        'RevenueX': Double_$type,
        'ExpensesX': Double_$type,
        'FormattedRevenue': String_$type,
        'FormattedExpenses': String_$type,
        'FormattedIncome': String_$type,
        'FormattedProfit': String_$type,
      };

  Object? getValue(String? propertyName) {
    switch (propertyName) {
      case 'Date':
      case 'date':
        return date;
      case 'Revenue':
      case 'revenue':
        return revenue;
      case 'Expenses':
      case 'expenses':
        return expenses;
      case 'Income':
      case 'income':
        return income;
      case 'IncomePerRevenue':
      case 'incomePerRevenue':
        return incomePerRevenue;
      case 'RevenueX':
      case 'revenueX':
        return revenueX;
      case 'ExpensesX':
      case 'expensesX':
        return expensesX;
      case 'FormattedRevenue':
      case 'formattedRevenue':
        return formattedRevenue;
      case 'FormattedExpenses':
      case 'formattedExpenses':
        return formattedExpenses;
      case 'FormattedIncome':
      case 'formattedIncome':
        return formattedIncome;
      case 'FormattedProfit':
      case 'formattedProfit':
        return formattedProfit;
    }
    return null;
  }

  void setValue(String? propertyName, Object? value) {
    switch (propertyName) {
      case 'Date':
      case 'date':
        date = value as String;
        break;
      case 'Revenue':
      case 'revenue':
        revenue = (value as num).toDouble();
        break;
      case 'Expenses':
      case 'expenses':
        expenses = (value as num).toDouble();
        break;
      case 'Income':
      case 'income':
        income = (value as num).toDouble();
        break;
      case 'IncomePerRevenue':
      case 'incomePerRevenue':
        incomePerRevenue = (value as num).toDouble();
        break;
      case 'RevenueX':
      case 'revenueX':
        revenueX = (value as num).toDouble();
        break;
      case 'ExpensesX':
      case 'expensesX':
        expensesX = (value as num).toDouble();
        break;
      case 'FormattedRevenue':
      case 'formattedRevenue':
        formattedRevenue = value as String;
        break;
      case 'FormattedExpenses':
      case 'formattedExpenses':
        formattedExpenses = value as String;
        break;
      case 'FormattedIncome':
      case 'formattedIncome':
        formattedIncome = value as String;
        break;
      case 'FormattedProfit':
      case 'formattedProfit':
        formattedProfit = value as String;
        break;
    }
  }
}

class _ReportedIncome {
  final String date;
  final double revenue;
  final double expenses;
  const _ReportedIncome(this.date, this.revenue, this.expenses);
}

class CompanyIncomeStatement extends ArrayList<CompanyIncomeStatementItem?> {
  CompanyIncomeStatement() {
    // Quarterly revenue and expenses are reported in thousands.
    const reported = <_ReportedIncome>[
      _ReportedIncome('Jan 1, 2019', 16914, 10183),
      _ReportedIncome('Mar 1, 2019', 15077, 12813),
      _ReportedIncome('Jun 1, 2019', 16886, 14476),
      _ReportedIncome('Sep 1, 2019', 17652, 11705),
      _ReportedIncome('Jan 1, 2020', 21082, 14044),
      _ReportedIncome('Mar 1, 2020', 17737, 12803),
      _ReportedIncome('Jun 1, 2020', 18687, 13677),
      _ReportedIncome('Sep 1, 2020', 21470, 13717),
      _ReportedIncome('Jan 1, 2021', 28072, 17133),
    ];
    for (var i = 0; i < reported.length; i++) {
      final row = reported[i];
      final item = CompanyIncomeStatementItem()
        ..date = row.date
        ..revenue = row.revenue * 1000
        ..expenses = row.expenses * 1000
        // Callouts use the category index; the target series supplies its column offset.
        ..revenueX = i.toDouble()
        ..expensesX = i.toDouble();
      item.income = item.revenue - item.expenses;
      item.incomePerRevenue = item.income / item.revenue * 100;
      item.formattedRevenue = '\$${abbreviate(item.revenue)}';
      item.formattedExpenses = '\$${abbreviate(item.expenses)}';
      item.formattedIncome = '\$${abbreviate(item.income)}';
      item.formattedProfit = '${item.incomePerRevenue}%';
      add(item);
    }
  }

  static String abbreviate(double value) {
    if (value >= 1000000) return '${(value / 1000000).toStringAsFixed(1)}M';
    if (value >= 1000) return '${(value / 1000).toStringAsFixed(1)}K';
    final text = value == value.roundToDouble()
        ? value.toStringAsFixed(0)
        : value.toString();
    return text.replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (_) => ',');
  }
}
//end data
