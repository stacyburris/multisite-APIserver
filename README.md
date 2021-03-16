# multisite-APIserver

Quality functional server to test API routes with projects that I build

## Haircare project

## Postman

**POST:** http://localhost:3000/customer

```
{   "name": "stacy2",
    "email": "stacy2@gmail.com",
    "phoneNumber": "206-512-1255",
    "hairType": "straight",
    "productType": "shampoo",
    "scalpType": "combination",
    "sideEffects": "none",
    "cost": 20,
    "brands": "rene furterer",
    "questions": "need a new stylist"
}
```

**GET:** http://localhost:3000/customer

+ Body: empty

**PUT:** http://localhost:3000/customer/`<enter id number here from get>`

+ Body: Change whichever one you would like to update

```
{
    "scalpType": "combination"
}
```

**GET (one):** http://localhost:3000/customer/`<enter id number here>`

+ Body: empty

**Delete:** http://localhost:3000/customer/`<enter id number here>`

+ Body: empty