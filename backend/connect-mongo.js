const MongoStore = require("connect-mongo");

console.log("=== TEST CONNECT-MONGO v6.0.0 ===\n");

console.log("1. Type de MongoStore:", typeof MongoStore);
console.log("2. MongoStore est:", MongoStore);
console.log("3. MongoStore.create existe ? ", typeof MongoStore.create);
console.log("4. MongoStore.default existe ?", typeof MongoStore.default);

console.log("\n5. Propriétés de MongoStore:");
console.log(Object.getOwnPropertyNames(MongoStore));

console.log("\n6. Prototype de MongoStore:");
console.log(Object.getOwnPropertyNames(MongoStore.prototype));

// Test de création
try {
  console.log("\n7. Test MongoStore.create():");
  const test1 = MongoStore.create({ mongoUrl: "mongodb://test" });
  console.log("   ✅ MongoStore.create() fonctionne");
} catch (err) {
  console.log("   ❌ MongoStore.create() échoue:", err.message);
}

try {
  console.log("\n8. Test new MongoStore():");
  const test2 = new MongoStore({ mongoUrl: "mongodb://test" });
  console.log("   ✅ new MongoStore() fonctionne");
} catch (err) {
  console.log("   ❌ new MongoStore() échoue:", err.message);
}

try {
  console.log("\n9. Test MongoStore.default:");
  if (MongoStore.default) {
    const test3 = MongoStore.default.create({ mongoUrl: "mongodb://test" });
    console.log("   ✅ MongoStore.default. create() fonctionne");
  } else {
    console.log("   ℹ️  MongoStore. default n'existe pas");
  }
} catch (err) {
  console.log("   ❌ MongoStore.default échoue:", err.message);
}
