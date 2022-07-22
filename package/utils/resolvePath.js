const resolvePath = (path, obj=self) => {
  var properties = Array.isArray(path) ? path : path.split('.')
  return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

export default resolvePath