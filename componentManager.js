const ComponentManager = {
    #components: {},
  
    #getComponent: componentName => {
      if (this.#components[componentName]) {
        return this.#components[componentName];
      }
      throw new Error(`Component with name ${componentName} not found`);
    },
  
    #registerComponent: (componentName, component) => {
      this.#components[componentName] = component;
    },
  
    loadComponent: (componentName, props) => {
      const DynamicComponent = this.#getComponent(componentName);
      return <DynamicComponent {...props} />;
    },
  
    registerComponent: (componentName, component) => {
      this.#registerComponent(componentName, component);
    },
  };
  
  const componentManager = ComponentManager;
  
  export default componentManager;
  