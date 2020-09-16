// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Moloch extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Moloch entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Moloch entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Moloch", id.toString(), this);
  }

  static load(id: string): Moloch | null {
    return store.get("Moloch", id) as Moloch | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get summoner(): Bytes {
    let value = this.get("summoner");
    return value.toBytes();
  }

  set summoner(value: Bytes) {
    this.set("summoner", Value.fromBytes(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (value === null) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(value as string));
    }
  }

  get version(): string | null {
    let value = this.get("version");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set version(value: string | null) {
    if (value === null) {
      this.unset("version");
    } else {
      this.set("version", Value.fromString(value as string));
    }
  }

  get newContract(): string | null {
    let value = this.get("newContract");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set newContract(value: string | null) {
    if (value === null) {
      this.unset("newContract");
    } else {
      this.set("newContract", Value.fromString(value as string));
    }
  }

  get deleted(): boolean {
    let value = this.get("deleted");
    return value.toBoolean();
  }

  set deleted(value: boolean) {
    this.set("deleted", Value.fromBoolean(value));
  }

  get summoningTime(): BigInt {
    let value = this.get("summoningTime");
    return value.toBigInt();
  }

  set summoningTime(value: BigInt) {
    this.set("summoningTime", Value.fromBigInt(value));
  }

  get periodDuration(): BigInt {
    let value = this.get("periodDuration");
    return value.toBigInt();
  }

  set periodDuration(value: BigInt) {
    this.set("periodDuration", Value.fromBigInt(value));
  }

  get votingPeriodLength(): BigInt {
    let value = this.get("votingPeriodLength");
    return value.toBigInt();
  }

  set votingPeriodLength(value: BigInt) {
    this.set("votingPeriodLength", Value.fromBigInt(value));
  }

  get gracePeriodLength(): BigInt {
    let value = this.get("gracePeriodLength");
    return value.toBigInt();
  }

  set gracePeriodLength(value: BigInt) {
    this.set("gracePeriodLength", Value.fromBigInt(value));
  }

  get proposalDeposit(): BigInt {
    let value = this.get("proposalDeposit");
    return value.toBigInt();
  }

  set proposalDeposit(value: BigInt) {
    this.set("proposalDeposit", Value.fromBigInt(value));
  }

  get dilutionBound(): BigInt {
    let value = this.get("dilutionBound");
    return value.toBigInt();
  }

  set dilutionBound(value: BigInt) {
    this.set("dilutionBound", Value.fromBigInt(value));
  }

  get processingReward(): BigInt {
    let value = this.get("processingReward");
    return value.toBigInt();
  }

  set processingReward(value: BigInt) {
    this.set("processingReward", Value.fromBigInt(value));
  }

  get depositToken(): string | null {
    let value = this.get("depositToken");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set depositToken(value: string | null) {
    if (value === null) {
      this.unset("depositToken");
    } else {
      this.set("depositToken", Value.fromString(value as string));
    }
  }

  get approvedTokens(): Array<string> {
    let value = this.get("approvedTokens");
    return value.toStringArray();
  }

  set approvedTokens(value: Array<string>) {
    this.set("approvedTokens", Value.fromStringArray(value));
  }

  get guildBankAddress(): Bytes | null {
    let value = this.get("guildBankAddress");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set guildBankAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("guildBankAddress");
    } else {
      this.set("guildBankAddress", Value.fromBytes(value as Bytes));
    }
  }

  get guildBankBalanceV1(): BigInt | null {
    let value = this.get("guildBankBalanceV1");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set guildBankBalanceV1(value: BigInt | null) {
    if (value === null) {
      this.unset("guildBankBalanceV1");
    } else {
      this.set("guildBankBalanceV1", Value.fromBigInt(value as BigInt));
    }
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(value as Array<string>));
    }
  }

  get members(): Array<string> | null {
    let value = this.get("members");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set members(value: Array<string> | null) {
    if (value === null) {
      this.unset("members");
    } else {
      this.set("members", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokenBalances(): Array<string> | null {
    let value = this.get("tokenBalances");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokenBalances(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokenBalances");
    } else {
      this.set("tokenBalances", Value.fromStringArray(value as Array<string>));
    }
  }

  get proposals(): Array<string> | null {
    let value = this.get("proposals");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set proposals(value: Array<string> | null) {
    if (value === null) {
      this.unset("proposals");
    } else {
      this.set("proposals", Value.fromStringArray(value as Array<string>));
    }
  }

  get rageQuits(): Array<string> | null {
    let value = this.get("rageQuits");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rageQuits(value: Array<string> | null) {
    if (value === null) {
      this.unset("rageQuits");
    } else {
      this.set("rageQuits", Value.fromStringArray(value as Array<string>));
    }
  }

  get totalShares(): BigInt {
    let value = this.get("totalShares");
    return value.toBigInt();
  }

  set totalShares(value: BigInt) {
    this.set("totalShares", Value.fromBigInt(value));
  }

  get totalLoot(): BigInt {
    let value = this.get("totalLoot");
    return value.toBigInt();
  }

  set totalLoot(value: BigInt) {
    this.set("totalLoot", Value.fromBigInt(value));
  }
}

export class TokenBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenBalance", id.toString(), this);
  }

  static load(id: string): TokenBalance | null {
    return store.get("TokenBalance", id) as TokenBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get moloch(): string {
    let value = this.get("moloch");
    return value.toString();
  }

  set moloch(value: string) {
    this.set("moloch", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get tokenBalance(): BigInt {
    let value = this.get("tokenBalance");
    return value.toBigInt();
  }

  set tokenBalance(value: BigInt) {
    this.set("tokenBalance", Value.fromBigInt(value));
  }

  get member(): string | null {
    let value = this.get("member");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set member(value: string | null) {
    if (value === null) {
      this.unset("member");
    } else {
      this.set("member", Value.fromString(value as string));
    }
  }

  get guildBank(): boolean {
    let value = this.get("guildBank");
    return value.toBoolean();
  }

  set guildBank(value: boolean) {
    this.set("guildBank", Value.fromBoolean(value));
  }

  get ecrowBank(): boolean {
    let value = this.get("ecrowBank");
    return value.toBoolean();
  }

  set ecrowBank(value: boolean) {
    this.set("ecrowBank", Value.fromBoolean(value));
  }

  get memberBank(): boolean {
    let value = this.get("memberBank");
    return value.toBoolean();
  }

  set memberBank(value: boolean) {
    this.set("memberBank", Value.fromBoolean(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get moloch(): string {
    let value = this.get("moloch");
    return value.toString();
  }

  set moloch(value: string) {
    this.set("moloch", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get whitelisted(): boolean {
    let value = this.get("whitelisted");
    return value.toBoolean();
  }

  set whitelisted(value: boolean) {
    this.set("whitelisted", Value.fromBoolean(value));
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get decimals(): BigInt | null {
    let value = this.get("decimals");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set decimals(value: BigInt | null) {
    if (value === null) {
      this.unset("decimals");
    } else {
      this.set("decimals", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Member entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Member entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Member", id.toString(), this);
  }

  static load(id: string): Member | null {
    return store.get("Member", id) as Member | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get moloch(): string {
    let value = this.get("moloch");
    return value.toString();
  }

  set moloch(value: string) {
    this.set("moloch", Value.fromString(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get loot(): BigInt | null {
    let value = this.get("loot");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set loot(value: BigInt | null) {
    if (value === null) {
      this.unset("loot");
    } else {
      this.set("loot", Value.fromBigInt(value as BigInt));
    }
  }

  get exists(): boolean {
    let value = this.get("exists");
    return value.toBoolean();
  }

  set exists(value: boolean) {
    this.set("exists", Value.fromBoolean(value));
  }

  get highestIndexYesVote(): string | null {
    let value = this.get("highestIndexYesVote");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set highestIndexYesVote(value: string | null) {
    if (value === null) {
      this.unset("highestIndexYesVote");
    } else {
      this.set("highestIndexYesVote", Value.fromString(value as string));
    }
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get didRagequit(): boolean {
    let value = this.get("didRagequit");
    return value.toBoolean();
  }

  set didRagequit(value: boolean) {
    this.set("didRagequit", Value.fromBoolean(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }

  get submissions(): Array<string> | null {
    let value = this.get("submissions");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set submissions(value: Array<string> | null) {
    if (value === null) {
      this.unset("submissions");
    } else {
      this.set("submissions", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokenBalances(): Array<string> | null {
    let value = this.get("tokenBalances");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokenBalances(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokenBalances");
    } else {
      this.set("tokenBalances", Value.fromStringArray(value as Array<string>));
    }
  }

  get rageQuits(): Array<string> | null {
    let value = this.get("rageQuits");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rageQuits(value: Array<string> | null) {
    if (value === null) {
      this.unset("rageQuits");
    } else {
      this.set("rageQuits", Value.fromStringArray(value as Array<string>));
    }
  }

  get proposedToKick(): boolean {
    let value = this.get("proposedToKick");
    return value.toBoolean();
  }

  set proposedToKick(value: boolean) {
    this.set("proposedToKick", Value.fromBoolean(value));
  }

  get kicked(): boolean {
    let value = this.get("kicked");
    return value.toBoolean();
  }

  set kicked(value: boolean) {
    this.set("kicked", Value.fromBoolean(value));
  }

  get jailed(): string | null {
    let value = this.get("jailed");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set jailed(value: string | null) {
    if (value === null) {
      this.unset("jailed");
    } else {
      this.set("jailed", Value.fromString(value as string));
    }
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }

  get uintVote(): i32 {
    let value = this.get("uintVote");
    return value.toI32();
  }

  set uintVote(value: i32) {
    this.set("uintVote", Value.fromI32(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get memberAddress(): Bytes | null {
    let value = this.get("memberAddress");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set memberAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("memberAddress");
    } else {
      this.set("memberAddress", Value.fromBytes(value as Bytes));
    }
  }

  get proposalIndex(): BigInt | null {
    let value = this.get("proposalIndex");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set proposalIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("proposalIndex");
    } else {
      this.set("proposalIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get delegateKey(): Bytes | null {
    let value = this.get("delegateKey");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set delegateKey(value: Bytes | null) {
    if (value === null) {
      this.unset("delegateKey");
    } else {
      this.set("delegateKey", Value.fromBytes(value as Bytes));
    }
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get proposalIndex(): BigInt | null {
    let value = this.get("proposalIndex");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set proposalIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("proposalIndex");
    } else {
      this.set("proposalIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get moloch(): string {
    let value = this.get("moloch");
    return value.toString();
  }

  set moloch(value: string) {
    this.set("moloch", Value.fromString(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get applicant(): Bytes {
    let value = this.get("applicant");
    return value.toBytes();
  }

  set applicant(value: Bytes) {
    this.set("applicant", Value.fromBytes(value));
  }

  get proposer(): Bytes | null {
    let value = this.get("proposer");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set proposer(value: Bytes | null) {
    if (value === null) {
      this.unset("proposer");
    } else {
      this.set("proposer", Value.fromBytes(value as Bytes));
    }
  }

  get sponsor(): Bytes {
    let value = this.get("sponsor");
    return value.toBytes();
  }

  set sponsor(value: Bytes) {
    this.set("sponsor", Value.fromBytes(value));
  }

  get sharesRequested(): BigInt {
    let value = this.get("sharesRequested");
    return value.toBigInt();
  }

  set sharesRequested(value: BigInt) {
    this.set("sharesRequested", Value.fromBigInt(value));
  }

  get lootRequested(): BigInt {
    let value = this.get("lootRequested");
    return value.toBigInt();
  }

  set lootRequested(value: BigInt) {
    this.set("lootRequested", Value.fromBigInt(value));
  }

  get tributeOffered(): BigInt {
    let value = this.get("tributeOffered");
    return value.toBigInt();
  }

  set tributeOffered(value: BigInt) {
    this.set("tributeOffered", Value.fromBigInt(value));
  }

  get tributeToken(): Bytes {
    let value = this.get("tributeToken");
    return value.toBytes();
  }

  set tributeToken(value: Bytes) {
    this.set("tributeToken", Value.fromBytes(value));
  }

  get tributeTokenSymbol(): string | null {
    let value = this.get("tributeTokenSymbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tributeTokenSymbol(value: string | null) {
    if (value === null) {
      this.unset("tributeTokenSymbol");
    } else {
      this.set("tributeTokenSymbol", Value.fromString(value as string));
    }
  }

  get tributeTokenDecimals(): BigInt | null {
    let value = this.get("tributeTokenDecimals");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tributeTokenDecimals(value: BigInt | null) {
    if (value === null) {
      this.unset("tributeTokenDecimals");
    } else {
      this.set("tributeTokenDecimals", Value.fromBigInt(value as BigInt));
    }
  }

  get paymentRequested(): BigInt {
    let value = this.get("paymentRequested");
    return value.toBigInt();
  }

  set paymentRequested(value: BigInt) {
    this.set("paymentRequested", Value.fromBigInt(value));
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    return value.toBytes();
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }

  get paymentTokenSymbol(): string | null {
    let value = this.get("paymentTokenSymbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paymentTokenSymbol(value: string | null) {
    if (value === null) {
      this.unset("paymentTokenSymbol");
    } else {
      this.set("paymentTokenSymbol", Value.fromString(value as string));
    }
  }

  get paymentTokenDecimals(): BigInt | null {
    let value = this.get("paymentTokenDecimals");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set paymentTokenDecimals(value: BigInt | null) {
    if (value === null) {
      this.unset("paymentTokenDecimals");
    } else {
      this.set("paymentTokenDecimals", Value.fromBigInt(value as BigInt));
    }
  }

  get startingPeriod(): BigInt | null {
    let value = this.get("startingPeriod");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startingPeriod(value: BigInt | null) {
    if (value === null) {
      this.unset("startingPeriod");
    } else {
      this.set("startingPeriod", Value.fromBigInt(value as BigInt));
    }
  }

  get yesVotes(): BigInt {
    let value = this.get("yesVotes");
    return value.toBigInt();
  }

  set yesVotes(value: BigInt) {
    this.set("yesVotes", Value.fromBigInt(value));
  }

  get noVotes(): BigInt {
    let value = this.get("noVotes");
    return value.toBigInt();
  }

  set noVotes(value: BigInt) {
    this.set("noVotes", Value.fromBigInt(value));
  }

  get sponsored(): boolean {
    let value = this.get("sponsored");
    return value.toBoolean();
  }

  set sponsored(value: boolean) {
    this.set("sponsored", Value.fromBoolean(value));
  }

  get sponsoredAt(): string | null {
    let value = this.get("sponsoredAt");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sponsoredAt(value: string | null) {
    if (value === null) {
      this.unset("sponsoredAt");
    } else {
      this.set("sponsoredAt", Value.fromString(value as string));
    }
  }

  get processed(): boolean {
    let value = this.get("processed");
    return value.toBoolean();
  }

  set processed(value: boolean) {
    this.set("processed", Value.fromBoolean(value));
  }

  get didPass(): boolean {
    let value = this.get("didPass");
    return value.toBoolean();
  }

  set didPass(value: boolean) {
    this.set("didPass", Value.fromBoolean(value));
  }

  get cancelled(): boolean {
    let value = this.get("cancelled");
    return value.toBoolean();
  }

  set cancelled(value: boolean) {
    this.set("cancelled", Value.fromBoolean(value));
  }

  get aborted(): boolean {
    let value = this.get("aborted");
    return value.toBoolean();
  }

  set aborted(value: boolean) {
    this.set("aborted", Value.fromBoolean(value));
  }

  get whitelist(): boolean {
    let value = this.get("whitelist");
    return value.toBoolean();
  }

  set whitelist(value: boolean) {
    this.set("whitelist", Value.fromBoolean(value));
  }

  get guildkick(): boolean {
    let value = this.get("guildkick");
    return value.toBoolean();
  }

  set guildkick(value: boolean) {
    this.set("guildkick", Value.fromBoolean(value));
  }

  get newMember(): boolean {
    let value = this.get("newMember");
    return value.toBoolean();
  }

  set newMember(value: boolean) {
    this.set("newMember", Value.fromBoolean(value));
  }

  get trade(): boolean {
    let value = this.get("trade");
    return value.toBoolean();
  }

  set trade(value: boolean) {
    this.set("trade", Value.fromBoolean(value));
  }

  get details(): string | null {
    let value = this.get("details");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set details(value: string | null) {
    if (value === null) {
      this.unset("details");
    } else {
      this.set("details", Value.fromString(value as string));
    }
  }

  get maxTotalSharesAndLootAtYesVote(): BigInt | null {
    let value = this.get("maxTotalSharesAndLootAtYesVote");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set maxTotalSharesAndLootAtYesVote(value: BigInt | null) {
    if (value === null) {
      this.unset("maxTotalSharesAndLootAtYesVote");
    } else {
      this.set(
        "maxTotalSharesAndLootAtYesVote",
        Value.fromBigInt(value as BigInt)
      );
    }
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }

  get yesShares(): BigInt {
    let value = this.get("yesShares");
    return value.toBigInt();
  }

  set yesShares(value: BigInt) {
    this.set("yesShares", Value.fromBigInt(value));
  }

  get noShares(): BigInt {
    let value = this.get("noShares");
    return value.toBigInt();
  }

  set noShares(value: BigInt) {
    this.set("noShares", Value.fromBigInt(value));
  }

  get votingPeriodStarts(): BigInt {
    let value = this.get("votingPeriodStarts");
    return value.toBigInt();
  }

  set votingPeriodStarts(value: BigInt) {
    this.set("votingPeriodStarts", Value.fromBigInt(value));
  }

  get votingPeriodEnds(): BigInt {
    let value = this.get("votingPeriodEnds");
    return value.toBigInt();
  }

  set votingPeriodEnds(value: BigInt) {
    this.set("votingPeriodEnds", Value.fromBigInt(value));
  }

  get gracePeriodEnds(): BigInt {
    let value = this.get("gracePeriodEnds");
    return value.toBigInt();
  }

  set gracePeriodEnds(value: BigInt) {
    this.set("gracePeriodEnds", Value.fromBigInt(value));
  }

  get molochVersion(): string {
    let value = this.get("molochVersion");
    return value.toString();
  }

  set molochVersion(value: string) {
    this.set("molochVersion", Value.fromString(value));
  }
}

export class RageQuit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RageQuit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RageQuit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RageQuit", id.toString(), this);
  }

  static load(id: string): RageQuit | null {
    return store.get("RageQuit", id) as RageQuit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get moloch(): string {
    let value = this.get("moloch");
    return value.toString();
  }

  set moloch(value: string) {
    this.set("moloch", Value.fromString(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get loot(): BigInt {
    let value = this.get("loot");
    return value.toBigInt();
  }

  set loot(value: BigInt) {
    this.set("loot", Value.fromBigInt(value));
  }
}

export class DaoMeta extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DaoMeta entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DaoMeta entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DaoMeta", id.toString(), this);
  }

  static load(id: string): DaoMeta | null {
    return store.get("DaoMeta", id) as DaoMeta | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (value === null) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(value as string));
    }
  }

  get version(): string | null {
    let value = this.get("version");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set version(value: string | null) {
    if (value === null) {
      this.unset("version");
    } else {
      this.set("version", Value.fromString(value as string));
    }
  }

  get newContract(): string | null {
    let value = this.get("newContract");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set newContract(value: string | null) {
    if (value === null) {
      this.unset("newContract");
    } else {
      this.set("newContract", Value.fromString(value as string));
    }
  }
}
