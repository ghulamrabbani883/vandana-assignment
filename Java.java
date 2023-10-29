import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Java{
    public static void main(String[] args) {
        //Shuffle checking
        int[] arr = {1,2,3,4,5,6,7};
        shuffle(arr);
        System.out.println(Arrays.toString(arr));

        //Roman to Integer
        int romanAnswer = romanToInteger("XLV");
        System.out.println(romanAnswer);

        //Panagram checking
        String s = "";
        boolean panagramAnswer = isPanagram(s);
        System.out.println(panagramAnswer);
    }

    //1. SHUFFLE ARRAY
    public static void shuffle(int[] arr){
        int n  = arr.length;
        //iterate over to the array
        for(int i=0;i<n;i++){
            //generate random index withing (0,n]
            int index = (int)(Math.random()*n);
            swap(arr, i, index);
        }
    }

    //swap function
    public static void swap(int[] arr, int first, int second){
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    //2. Roman to Integer
    public static int romanToInteger(String s){
        //Creating a map to store key val of roman integer
        Map<Character, Integer> map = new HashMap<>();

        //Now store all the roman character with its value
        map.put('I',1);
        map.put('V', 5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);

        int actualAnswer = 0;
        int prevValue = 0;
        int n = s.length();

        //we will iterate over string from right to left to get the character val
        // one by one and will check, if the character val is greater than prev val,
        // then we will add that val to the actualAnswer else we will subtract from
        // actual answer and at last we will keep updating prev val;
        for(int i=n-1;i>=0;i--){
            //getting current val
            int current = map.get(s.charAt(i));
            if(current >= prevValue){
                actualAnswer += current;
            }else {
                actualAnswer -= current;
            }
            prevValue = current;
        }
        return actualAnswer;
    }

    //3 CHECK FOR PANAGRAM
    public static boolean isPanagram(String s){
        //Creating map to store alpha from a to z with intial value of false
        Map<Character, Boolean> map = new HashMap<>();
        for(int i=0;i<26;i++){
            char ch = (char)('a'+i);
            map.put(ch, false);
        }

        //Now iterate over to the string and get character and set the
        // value to true in map of that character
        s = s.toLowerCase();
        int n = s.length();
        for(int i=0;i<n;i++){
            char ch = s.charAt(i);
            map.put(ch, true);
        }

        //Now we will iterate over to map to check if it contains false
        // value then return false otherwise return true
        for(Map.Entry<Character, Boolean> entry: map.entrySet()){
            if(entry.getValue() == false){
                return false;
            }
        }
        return true;
    }
}