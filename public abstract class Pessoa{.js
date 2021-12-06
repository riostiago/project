public abstract class Pessoa{
    protected String xNome;
    protected Pessoa(){
      xNome = "Sem nome";
    }
    protected Pessoa(String nome){
      xNome = nome;
    }
    public String getNome(){
      return xNome;
    }
  }
  
  public class Fisica extends Pessoa{
    private String xCPF;
    public Fisica(){
      super();
    }
    public Fisica(String nome){
      super(nome);
    }
    public String getCPF(){
      return  xCPF;
    }
  }
  
  public class Juridica extends Pessoa{
    private String xCNPJ;
    public Juridica(){
      super();
    }
    public Juridica(String nome){
      super(nome);
    }
    public String getCNPJ(){
      return  xCNPJ;
    }
    public String getNome(){
      return super.getNome();
    }
  }
  
  class Principal{
    public static void main(String[] args){
      Fisica pessoa1 = new Fisica("Daniel");
      System.out.println (pessoa1.getNome());
      System.out.println (pessoa1.getCPF());
      Juridica pessoa2 = new Juridica();
      System.out.println (pessoa2.getNome());
      System.out.println (pessoa2.getCNPJ());
    }
  }