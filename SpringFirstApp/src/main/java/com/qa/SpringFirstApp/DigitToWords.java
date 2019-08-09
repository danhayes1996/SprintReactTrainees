package com.qa.SpringFirstApp;

public class DigitToWords {
	private static final String[] DIGITS = {"One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" };
	private static final String[] TEENS = {"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
	private static final String[] TENS = {"Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" };
	private static final String[] POWER = { "", " Thousand, ", " Million, ", " Billion, ", " Trillion, ", " Quadrillion, ", " Quintillion, "};
	
	private String getTens(int val) {
		int tens = val % 100 / 10;
		int digits = val % 10;
		if(tens == 0 && digits == 0) return "";
		switch(tens) {
			case 0 : return DIGITS[digits - 1];
			case 1 : return TEENS[digits];
			default :
				switch(digits) {
					case 0 : return TENS[tens - 2];
					default : return TENS[tens - 2] + "-" + DIGITS[digits - 1];
				}
		}
	}
	
	private String getDigit(int val) {
		return val == 0 ? "" : DIGITS[val - 1];
	}
	
	private String combine(String thousands, String hundreds, String tens) {
		String total = "";
		total = thousands;
		if(!total.equals("") && !hundreds.equals("")) total += ", " + hundreds;
		else total += hundreds;
		
		if(!total.equals("") && !tens.equals("")) total += " and " + tens;
		else total += tens;
		
		return total;
	}
	
	public String digitToEnglish(long val) {
		int[] nums = new int[8];
		int i = 0;
		String res = "";
		boolean negative = false;
		
		if(val < 0) {
			negative = true;
			val = Math.abs(val);
		}
		
		//assign values
		while(val >= 1000) {
			nums[i++] = (int) (val % 1000);
			val /= 1000;
		}
		nums[i] = (int) val;
		
		i = nums.length - 1;
		while(i-- != 0) {
			if(nums[i] == 0) continue;
			
			String ts = getTens(nums[i]);
			String hs = getDigit(nums[i] % 1000 / 100);
			if(!hs.isEmpty()) hs += " Hundred";
			String ths = getDigit(nums[i] / 1000);
			res += combine(ths, hs, ts) + POWER[i];
		}
		
		if(res.isEmpty()) {
			return "zero";
		} else {
			return (negative ? "Negative " : "") + res;
		}
	}
}
