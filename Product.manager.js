class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      if (this.products.some(product => product.code === code)) {
        console.error("Ya existe un producto con el mismo código.");
        return;
      }
  
      const newProduct = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (!product) {
        console.error("Producto no encontrado.");
      } else {
        console.log("Producto encontrado:", product);
      }
  
      return product;
    }
  }
  
  class Contador {
    static globalCount = 0;
  
    constructor(responsable) {
      this.responsable = responsable;
      this.cuentaIndividual = 0;
      Contador.globalCount++;
    }
  
    getResponsable() {
      return this.responsable;
    }
  
    contar() {
      this.cuentaIndividual++;
      Contador.globalCount++;
    }
  
    getCuentaIndividual() {
      return this.cuentaIndividual;
    }
  
    static getCuentaGlobal() {
      return Contador.globalCount;
    }
  }
  

  const productManager = new ProductManager();
  
  productManager.addProduct("Producto 1", "Descripción 1", 10, "image1.jpg", "ABC123", 20);
  productManager.addProduct("Producto 2", "Descripción 2", 15, "image2.jpg", "DEF456", 15);
  
  console.log("Productos:", productManager.getProducts());
  productManager.getProductById(1);
  
  const contador1 = new Contador("Responsable 1");
  const contador2 = new Contador("Responsable 2");
  
  contador1.contar();
  contador2.contar();
  contador2.contar();
  
  console.log("Cuenta individual de contador1:", contador1.getCuentaIndividual());
  console.log("Cuenta individual de contador2:", contador2.getCuentaIndividual());
  console.log("Cuenta global:", Contador.getCuentaGlobal());
  
