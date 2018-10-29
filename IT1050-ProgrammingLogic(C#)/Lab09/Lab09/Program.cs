using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab09
{
    class Program
    {
        static void Main(string[] args)
        {
            //This doesn't meet all the requirements of the assignment, but it's as close as I can get right now
            //I'm not sure how to use the GetResult method in combination with the void methods in MyMath class 

            MyMath MM = new MyMath();

            double operand1;
            double operand2;
            double result;


                       
            MM.Multiply(30, 2);
            MM.Divide(35, 7);
            MM.Add(23, 2);
            MM.Subtract(17, 2);
            
            
            
        }

        
    }
}
