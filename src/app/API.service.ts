/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateOrderInput = {
  id?: string | null;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails?: string | null;
};

export enum OrderStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  ONHOLD = "ONHOLD",
  PROCESSING = "PROCESSING",
  PENDING_PAYMENT = "PENDING_PAYMENT"
}

export type UpdateOrderInput = {
  id: string;
  status?: OrderStatus | null;
  dateOrderPlaced?: string | null;
  orderDetails?: string | null;
};

export type DeleteOrderInput = {
  id?: string | null;
};

export type CreateOrderItemInput = {
  id?: string | null;
  quantity: number;
  price: number;
  otherItemDetails?: string | null;
  orderItemOrderId?: string | null;
  orderItemProductId?: string | null;
};

export type UpdateOrderItemInput = {
  id: string;
  quantity?: number | null;
  price?: number | null;
  otherItemDetails?: string | null;
  orderItemOrderId?: string | null;
  orderItemProductId?: string | null;
};

export type DeleteOrderItemInput = {
  id?: string | null;
};

export type CreateProductInput = {
  id?: string | null;
  name?: string | null;
  price: number;
  stock: number;
  size?: string | null;
  description?: string | null;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
  size?: string | null;
  description?: string | null;
};

export type DeleteProductInput = {
  id?: string | null;
};

export type ModelOrderFilterInput = {
  id?: ModelIDFilterInput | null;
  status?: ModelOrderStatusFilterInput | null;
  dateOrderPlaced?: ModelStringFilterInput | null;
  orderDetails?: ModelStringFilterInput | null;
  and?: Array<ModelOrderFilterInput | null> | null;
  or?: Array<ModelOrderFilterInput | null> | null;
  not?: ModelOrderFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelOrderStatusFilterInput = {
  eq?: OrderStatus | null;
  ne?: OrderStatus | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelOrderItemFilterInput = {
  id?: ModelIDFilterInput | null;
  quantity?: ModelIntFilterInput | null;
  price?: ModelFloatFilterInput | null;
  otherItemDetails?: ModelStringFilterInput | null;
  and?: Array<ModelOrderItemFilterInput | null> | null;
  or?: Array<ModelOrderItemFilterInput | null> | null;
  not?: ModelOrderItemFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  price?: ModelFloatFilterInput | null;
  stock?: ModelIntFilterInput | null;
  size?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type CreateOrderMutation = {
  __typename: "Order";
  id: string;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails: string | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  id: string;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails: string | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  id: string;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails: string | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateOrderItemMutation = {
  __typename: "OrderItem";
  id: string;
  quantity: number;
  price: number;
  otherItemDetails: string | null;
  order: {
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  product: {
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateOrderItemMutation = {
  __typename: "OrderItem";
  id: string;
  quantity: number;
  price: number;
  otherItemDetails: string | null;
  order: {
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  product: {
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteOrderItemMutation = {
  __typename: "OrderItem";
  id: string;
  quantity: number;
  price: number;
  otherItemDetails: string | null;
  order: {
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  product: {
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number;
  stock: number;
  size: string | null;
  description: string | null;
  orderItems: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number;
  stock: number;
  size: string | null;
  description: string | null;
  orderItems: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number;
  stock: number;
  size: string | null;
  description: string | null;
  orderItems: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails: string | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderItemQuery = {
  __typename: "OrderItem";
  id: string;
  quantity: number;
  price: number;
  otherItemDetails: string | null;
  order: {
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  product: {
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListOrderItemsQuery = {
  __typename: "ModelOrderItemConnection";
  items: Array<{
    __typename: "OrderItem";
    id: string;
    quantity: number;
    price: number;
    otherItemDetails: string | null;
    order: {
      __typename: "Order";
      id: string;
      status: OrderStatus;
      dateOrderPlaced: string;
      orderDetails: string | null;
      items: {
        __typename: "ModelOrderItemConnection";
        nextToken: string | null;
      } | null;
    } | null;
    product: {
      __typename: "Product";
      id: string;
      name: string | null;
      price: number;
      stock: number;
      size: string | null;
      description: string | null;
      orderItems: {
        __typename: "ModelOrderItemConnection";
        nextToken: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number;
  stock: number;
  size: string | null;
  description: string | null;
  orderItems: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  id: string;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails: string | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  id: string;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails: string | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  id: string;
  status: OrderStatus;
  dateOrderPlaced: string;
  orderDetails: string | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateOrderItemSubscription = {
  __typename: "OrderItem";
  id: string;
  quantity: number;
  price: number;
  otherItemDetails: string | null;
  order: {
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  product: {
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateOrderItemSubscription = {
  __typename: "OrderItem";
  id: string;
  quantity: number;
  price: number;
  otherItemDetails: string | null;
  order: {
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  product: {
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteOrderItemSubscription = {
  __typename: "OrderItem";
  id: string;
  quantity: number;
  price: number;
  otherItemDetails: string | null;
  order: {
    __typename: "Order";
    id: string;
    status: OrderStatus;
    dateOrderPlaced: string;
    orderDetails: string | null;
    items: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  product: {
    __typename: "Product";
    id: string;
    name: string | null;
    price: number;
    stock: number;
    size: string | null;
    description: string | null;
    orderItems: {
      __typename: "ModelOrderItemConnection";
      items: Array<{
        __typename: "OrderItem";
        id: string;
        quantity: number;
        price: number;
        otherItemDetails: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number;
  stock: number;
  size: string | null;
  description: string | null;
  orderItems: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number;
  stock: number;
  size: string | null;
  description: string | null;
  orderItems: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number;
  stock: number;
  size: string | null;
  description: string | null;
  orderItems: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      id: string;
      quantity: number;
      price: number;
      otherItemDetails: string | null;
      order: {
        __typename: "Order";
        id: string;
        status: OrderStatus;
        dateOrderPlaced: string;
        orderDetails: string | null;
      } | null;
      product: {
        __typename: "Product";
        id: string;
        name: string | null;
        price: number;
        stock: number;
        size: string | null;
        description: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateOrder(input: CreateOrderInput): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!) {
        createOrder(input: $input) {
          __typename
          id
          status
          dateOrderPlaced
          orderDetails
          items {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrderMutation>response.data.createOrder;
  }
  async UpdateOrder(input: UpdateOrderInput): Promise<UpdateOrderMutation> {
    const statement = `mutation UpdateOrder($input: UpdateOrderInput!) {
        updateOrder(input: $input) {
          __typename
          id
          status
          dateOrderPlaced
          orderDetails
          items {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrderMutation>response.data.updateOrder;
  }
  async DeleteOrder(input: DeleteOrderInput): Promise<DeleteOrderMutation> {
    const statement = `mutation DeleteOrder($input: DeleteOrderInput!) {
        deleteOrder(input: $input) {
          __typename
          id
          status
          dateOrderPlaced
          orderDetails
          items {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async CreateOrderItem(
    input: CreateOrderItemInput
  ): Promise<CreateOrderItemMutation> {
    const statement = `mutation CreateOrderItem($input: CreateOrderItemInput!) {
        createOrderItem(input: $input) {
          __typename
          id
          quantity
          price
          otherItemDetails
          order {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          product {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrderItemMutation>response.data.createOrderItem;
  }
  async UpdateOrderItem(
    input: UpdateOrderItemInput
  ): Promise<UpdateOrderItemMutation> {
    const statement = `mutation UpdateOrderItem($input: UpdateOrderItemInput!) {
        updateOrderItem(input: $input) {
          __typename
          id
          quantity
          price
          otherItemDetails
          order {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          product {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrderItemMutation>response.data.updateOrderItem;
  }
  async DeleteOrderItem(
    input: DeleteOrderItemInput
  ): Promise<DeleteOrderItemMutation> {
    const statement = `mutation DeleteOrderItem($input: DeleteOrderItemInput!) {
        deleteOrderItem(input: $input) {
          __typename
          id
          quantity
          price
          otherItemDetails
          order {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          product {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrderItemMutation>response.data.deleteOrderItem;
  }
  async CreateProduct(
    input: CreateProductInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
          __typename
          id
          name
          price
          stock
          size
          description
          orderItems {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!) {
        updateProduct(input: $input) {
          __typename
          id
          name
          price
          stock
          size
          description
          orderItems {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!) {
        deleteProduct(input: $input) {
          __typename
          id
          name
          price
          stock
          size
          description
          orderItems {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async GetOrder(id: string): Promise<GetOrderQuery> {
    const statement = `query GetOrder($id: ID!) {
        getOrder(id: $id) {
          __typename
          id
          status
          dateOrderPlaced
          orderDetails
          items {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderQuery>response.data.getOrder;
  }
  async ListOrders(
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrdersQuery> {
    const statement = `query ListOrders($filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
        listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrdersQuery>response.data.listOrders;
  }
  async GetOrderItem(id: string): Promise<GetOrderItemQuery> {
    const statement = `query GetOrderItem($id: ID!) {
        getOrderItem(id: $id) {
          __typename
          id
          quantity
          price
          otherItemDetails
          order {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          product {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderItemQuery>response.data.getOrderItem;
  }
  async ListOrderItems(
    filter?: ModelOrderItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrderItemsQuery> {
    const statement = `query ListOrderItems($filter: ModelOrderItemFilterInput, $limit: Int, $nextToken: String) {
        listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            quantity
            price
            otherItemDetails
            order {
              __typename
              id
              status
              dateOrderPlaced
              orderDetails
              items {
                __typename
                nextToken
              }
            }
            product {
              __typename
              id
              name
              price
              stock
              size
              description
              orderItems {
                __typename
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrderItemsQuery>response.data.listOrderItems;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          price
          stock
          size
          description
          orderItems {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  OnCreateOrderListener: Observable<OnCreateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrder {
        onCreateOrder {
          __typename
          id
          status
          dateOrderPlaced
          orderDetails
          items {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateOrderSubscription>;

  OnUpdateOrderListener: Observable<OnUpdateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrder {
        onUpdateOrder {
          __typename
          id
          status
          dateOrderPlaced
          orderDetails
          items {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateOrderSubscription>;

  OnDeleteOrderListener: Observable<OnDeleteOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrder {
        onDeleteOrder {
          __typename
          id
          status
          dateOrderPlaced
          orderDetails
          items {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteOrderSubscription>;

  OnCreateOrderItemListener: Observable<
    OnCreateOrderItemSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrderItem {
        onCreateOrderItem {
          __typename
          id
          quantity
          price
          otherItemDetails
          order {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          product {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateOrderItemSubscription>;

  OnUpdateOrderItemListener: Observable<
    OnUpdateOrderItemSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrderItem {
        onUpdateOrderItem {
          __typename
          id
          quantity
          price
          otherItemDetails
          order {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          product {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateOrderItemSubscription>;

  OnDeleteOrderItemListener: Observable<
    OnDeleteOrderItemSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrderItem {
        onDeleteOrderItem {
          __typename
          id
          quantity
          price
          otherItemDetails
          order {
            __typename
            id
            status
            dateOrderPlaced
            orderDetails
            items {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
          product {
            __typename
            id
            name
            price
            stock
            size
            description
            orderItems {
              __typename
              items {
                __typename
                id
                quantity
                price
                otherItemDetails
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteOrderItemSubscription>;

  OnCreateProductListener: Observable<
    OnCreateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          price
          stock
          size
          description
          orderItems {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateProductSubscription>;

  OnUpdateProductListener: Observable<
    OnUpdateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          price
          stock
          size
          description
          orderItems {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateProductSubscription>;

  OnDeleteProductListener: Observable<
    OnDeleteProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          price
          stock
          size
          description
          orderItems {
            __typename
            items {
              __typename
              id
              quantity
              price
              otherItemDetails
              order {
                __typename
                id
                status
                dateOrderPlaced
                orderDetails
              }
              product {
                __typename
                id
                name
                price
                stock
                size
                description
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteProductSubscription>;
}
