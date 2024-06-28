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
public class Calcular {
    public static void main(String[] args)
    {
        int rep = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el numeree"));
        
        Numero num = new Numero(rep);
        num.capturarNumeros();
        num.calcularsuma();
        num.mostrar();
    }
}
