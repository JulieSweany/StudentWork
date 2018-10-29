using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab09
{
    class MyMath
    {
        public double result;
        public double operand1;
        public double operand2;

        

        public void Multiply(double operand1, double operand2)
         {
             double result = operand1 * operand2;
             Console.WriteLine("The product is {0}", result);
         }

         public void Divide(double operand1, double operand2)
         {
             double result = operand1 / operand2;
             Console.WriteLine("The quotient is {0}", result);
         }
         public void Subtract(double operand1, double operand2)
         {
             double result = operand1 - operand2;
             Console.WriteLine("The difference is {0}", result);
         }
         public void Add(double operand1, double operand2)
         {
             double result = operand1 + operand2;
             Console.WriteLine("The sum is {0}", result);
         }
     
        

    }
} 
