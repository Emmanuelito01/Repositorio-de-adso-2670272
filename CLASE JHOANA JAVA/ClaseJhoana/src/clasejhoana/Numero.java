/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package clasejhoana;

import javax.swing.JOptionPane;

/**
 *
 * @author APRENDIZ
 */
public class Numero {
    //atributos globales
    private int[] Numeros; 
    int positivo = 0;
    int negativo = 0;
    int sumatoria = 0;
    
    //manejo de constructor
    public Numero(int n){
        Numeros = new int[n];
    }
    //definir metodos
    public void capturarNumeros(){
        for(int i = 0;i<Numeros.length;i++){
            int cant = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el numeree"+(i+1)));
            Numeros[i] = cant;
            
        }
        
    }
    public int calcularsuma()
        {
            
            
            for(int numero : Numeros)
            {
                if (numero>0)
                {
                   positivo++;
                }
                else
                {
                negativo++;
                }
                sumatoria += numero; 
            }
            return sumatoria;
        } 
    public void mostrar ()
    {
        String Resultado ="la sumatoria de  los numeros es "+sumatoria+"\n"+
                "Cantidad de numeros positivos : "+positivo+"\n"+
                "Cantidad de numeros positivos : "+negativo+"\n"+"";
                        
        JOptionPane.showInternalMessageDialog(null, Resultado);
    }
}
