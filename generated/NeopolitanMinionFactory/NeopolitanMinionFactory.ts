// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class SummonMinion extends EthereumEvent {
  get params(): SummonMinion__Params {
    return new SummonMinion__Params(this);
  }
}

export class SummonMinion__Params {
  _event: SummonMinion;

  constructor(event: SummonMinion) {
    this._event = event;
  }

  get minion(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get moloch(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get details(): string {
    return this._event.parameters[2].value.toString();
  }

  get minionType(): string {
    return this._event.parameters[3].value.toString();
  }

  get minQuorum(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NeopolitanMinionFactory__minionsResult {
  value0: Address;
  value1: string;

  constructor(value0: Address, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromString(this.value1));
    return map;
  }
}

export class NeopolitanMinionFactory extends SmartContract {
  static bind(address: Address): NeopolitanMinionFactory {
    return new NeopolitanMinionFactory("NeopolitanMinionFactory", address);
  }

  minionList(param0: BigInt): Address {
    let result = super.call("minionList", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_minionList(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("minionList", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  minions(param0: Address): NeopolitanMinionFactory__minionsResult {
    let result = super.call("minions", [EthereumValue.fromAddress(param0)]);

    return new NeopolitanMinionFactory__minionsResult(
      result[0].toAddress(),
      result[1].toString()
    );
  }

  try_minions(
    param0: Address
  ): CallResult<NeopolitanMinionFactory__minionsResult> {
    let result = super.tryCall("minions", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new NeopolitanMinionFactory__minionsResult(
        value[0].toAddress(),
        value[1].toString()
      )
    );
  }

  summonMinion(moloch: Address, details: string, minQuorum: BigInt): Address {
    let result = super.call("summonMinion", [
      EthereumValue.fromAddress(moloch),
      EthereumValue.fromString(details),
      EthereumValue.fromUnsignedBigInt(minQuorum)
    ]);

    return result[0].toAddress();
  }

  try_summonMinion(
    moloch: Address,
    details: string,
    minQuorum: BigInt
  ): CallResult<Address> {
    let result = super.tryCall("summonMinion", [
      EthereumValue.fromAddress(moloch),
      EthereumValue.fromString(details),
      EthereumValue.fromUnsignedBigInt(minQuorum)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  template(): Address {
    let result = super.call("template", []);

    return result[0].toAddress();
  }

  try_template(): CallResult<Address> {
    let result = super.tryCall("template", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _template(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SummonMinionCall extends EthereumCall {
  get inputs(): SummonMinionCall__Inputs {
    return new SummonMinionCall__Inputs(this);
  }

  get outputs(): SummonMinionCall__Outputs {
    return new SummonMinionCall__Outputs(this);
  }
}

export class SummonMinionCall__Inputs {
  _call: SummonMinionCall;

  constructor(call: SummonMinionCall) {
    this._call = call;
  }

  get moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get details(): string {
    return this._call.inputValues[1].value.toString();
  }

  get minQuorum(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SummonMinionCall__Outputs {
  _call: SummonMinionCall;

  constructor(call: SummonMinionCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
